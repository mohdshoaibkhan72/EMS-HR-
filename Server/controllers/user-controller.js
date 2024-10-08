const ErrorHandler = require("../utils/error-handler");
const userService = require("../services/user-service");
const UserDto = require("../dtos/user-dto");
const mongoose = require("mongoose");
const crypto = require("crypto");
const teamService = require("../services/team-service");
const attendanceService = require("../services/attendance-service");

class UserController {
  createUser = async (req, res, next) => {
    const file = req.file;

    // Destructure and retrieve all required fields from req.body
    let {
      name,
      dob,
      gender,
      joiningDate,
      empID,
      email,
      password,
      type,
      address,
      mobile,
      accountNumber, // Added account number
      bankName, // Added bank name
      IFSC, // Added IFSC code
    } = req.body;

    // Generate a unique username
    const username = "user" + crypto.randomInt(11111111, 999999999);

    // Validate required fields
    if (
      !name ||
      !dob ||
      !gender ||
      !joiningDate ||
      !empID ||
      !email ||
      !password ||
      !type ||
      !address ||
      !file ||
      !mobile ||
      !accountNumber || // Validate account number
      !bankName || // Validate bank name
      !IFSC // Validate IFSC code
    ) {
      return next(ErrorHandler.badRequest("All fields are required"));
    }

    // Normalize user type to lowercase
    type = type.toLowerCase();

    // Validate admin password for admin user type
    if (type === "admin") {
      const adminPassword = req.body.adminPassword;
      if (!adminPassword) {
        return next(
          ErrorHandler.badRequest(
            `Please enter your password to add ${name} as an Admin`
          )
        );
      }

      // Verify admin password
      const { _id } = req.user;
      const { password: hashPassword } = await userService.findUser({ _id });
      const isPasswordValid = await userService.verifyPassword(
        adminPassword,
        hashPassword
      );
      if (!isPasswordValid) {
        return next(
          ErrorHandler.unAuthorized("You have entered a wrong password")
        );
      }
    }

    // Create user object to store in the database
    const user = {
      name,
      dob,
      gender,
      joiningDate,
      empID,
      email,
      username,
      mobile,
      password,
      type,
      address,
      image: file.filename,
      accountNumber, // Add account number to the user object
      bankName, // Add bank name to the user object
      IFSC, // Add IFSC code to the user object
    };

    // Create user in the database
    const userResp = await userService.createUser(user);

    // Handle user creation failure
    if (!userResp) {
      return next(ErrorHandler.serverError("Failed to create an account"));
    }

    // Respond with success message and created user data
    res.json({
      success: true,
      message: "User has been added",
      user: new UserDto(userResp), // Pass the created user data to UserDto
    });
  };
  updateUser = async (req, res, next) => {
    const file = req.file;
    const filename = file && file.filename;
    let user, id;
    console.log(req.user.type);
    if (req.user.type === "admin") {
      const { id } = req.params;
      let { name, username, email, password, type, status, address, mobile } =
        req.body;
      type = type && type.toLowerCase();
      if (!mongoose.Types.ObjectId.isValid(id))
        return next(ErrorHandler.badRequest("Invalid User Id"));
      if (type) {
        const dbUser = await userService.findUser({ _id: id });
        if (!dbUser) return next(ErrorHandler.badRequest("No User Found"));
        if (dbUser.type != type) {
          const { _id } = req.user;
          if (_id === id)
            return next(
              ErrorHandler.badRequest(`You Can't Change Your Own Position`)
            );
          const { adminPassword } = req.body;
          if (!adminPassword)
            return next(
              ErrorHandler.badRequest(
                `Please Enter Your Password To Change The Type`
              )
            );
          const { password: hashPassword } = await userService.findUser({
            _id,
          });
          const isPasswordValid = await userService.verifyPassword(
            adminPassword,
            hashPassword
          );
          if (!isPasswordValid)
            return next(
              ErrorHandler.unAuthorized("You have entered a wrong password")
            );

          if (
            dbUser.type === "employee" &&
            (type === "admin" || type === "leader")
          )
            if (dbUser.team != null)
              return next(
                ErrorHandler.badRequest(`Error : ${dbUser.name} is in a team.`)
              );

          if (
            dbUser.type === "leader" &&
            (type === "admin" || type === "employee")
          )
            if (await teamService.findTeam({ leader: id }))
              return next(
                ErrorHandler.badRequest(
                  `Error : ${dbUser.name} is leading a team.`
                )
              );
        }
      }
      user = {
        name,
        email,
        status,
        username,
        mobile,
        password,
        type,
        address,
        image: filename,
      };
    } else {
      id = req.user._id;
      let { name, username, address, mobile } = req.body;
      user = {
        name,
        username,
        mobile,
        address,
        image: filename,
      };
    }
    // console.log(user);
    const userResp = await userService.updateUser(id, user);
    // console.log(userResp);
    if (!userResp)
      return next(ErrorHandler.serverError("Failed To Update Account"));
    res.json({ success: true, message: "Account Updated" });
  };

  getUsers = async (req, res, next) => {
    const type = req.path.split("/").pop().replace("s", "");
    const emps = await userService.findUsers({ type });
    if (!emps || emps.length < 1)
      return next(
        ErrorHandler.notFound(
          `No ${
            type.charAt(0).toUpperCase() + type.slice(1).replace(" ", "")
          } Found`
        )
      );
    const employees = emps.map((o) => new UserDto(o));
    res.json({
      success: true,
      message: `${
        type.charAt(0).toUpperCase() + type.slice(1).replace(" ", "")
      } List Found`,
      data: employees,
    });
  };

  getFreeEmployees = async (req, res, next) => {
    const emps = await userService.findUsers({ type: "employee", team: null });
    if (!emps || emps.length < 1)
      return next(ErrorHandler.notFound(`No Free Employee Found`));
    const employees = emps.map((o) => new UserDto(o));
    res.json({
      success: true,
      message: "Free Employees List Found",
      data: employees,
    });
  };

  getUser = async (req, res, next) => {
    const { id } = req.params;
    const type = req.path.replace(id, "").replace("/", "").replace("/", "");
    if (!mongoose.Types.ObjectId.isValid(id))
      return next(
        ErrorHandler.badRequest(
          `Invalid ${
            type.charAt(0).toUpperCase() + type.slice(1).replace(" ", "")
          } Id`
        )
      );
    const emp = await userService.findUser({ _id: id, type });
    if (!emp)
      return next(
        ErrorHandler.notFound(
          `No ${
            type.charAt(0).toUpperCase() + type.slice(1).replace(" ", "")
          } Found`
        )
      );
    res.json({
      success: true,
      message: "Employee Found",
      data: new UserDto(emp),
    });
  };

  getUserNoFilter = async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return next(ErrorHandler.badRequest("Invalid User Id"));
    const emp = await userService.findUser({ _id: id });
    if (!emp) return next(ErrorHandler.notFound("No User Found"));
    res.json({ success: true, message: "User Found", data: new UserDto(emp) });
  };

  getLeaders = async (req, res, next) => {
    const leaders = await userService.findLeaders();
    const data = leaders.map((o) => new UserDto(o));
    res.json({ success: true, message: "Leaders Found", data });
  };

  getFreeLeaders = async (req, res, next) => {
    const leaders = await userService.findFreeLeaders();
    const data = leaders.map((o) => new UserDto(o));
    res.json({ success: true, message: "Free Leaders Found", data });
  };

  markEmployeeAttendance = async (req, res, next) => {
    try {
      const { employeeID, attendanceDate, status } = req.body;
      const validStatuses = ["Present", "Absent", "Leave", "Half Day"];

      // Validate status
      if (!validStatuses.includes(status)) {
        return next(ErrorHandler.badRequest("Invalid attendance status"));
      }

      const d = new Date(attendanceDate);
      const today = new Date();

      // Ensure the date is not in the future
      if (d > today) {
        return next(
          ErrorHandler.badRequest("Cannot mark attendance for future dates")
        );
      }

      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const newAttendance = {
        employeeID,
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        date: d.getDate(),
        day: days[d.getDay()],
        status, // Store attendance status (Present, Absent, etc.)
      };

      // Check if attendance has already been marked for this day
      const isAttendanceMarked = await attendanceService.findAttendance(
        newAttendance
      );
      if (isAttendanceMarked) {
        return next(
          ErrorHandler.notAllowed(
            `${d.toLocaleDateString()} ${
              days[d.getDay()]
            } Attendance already marked!`
          )
        );
      }

      // Save the attendance
      const resp = await attendanceService.markAttendance(newAttendance);
      if (!resp) {
        return next(ErrorHandler.serverError("Failed to mark attendance"));
      }

      const msg = `${d.toLocaleDateString()} ${
        days[d.getDay()]
      } Attendance marked as ${status}!`;

      // Send the response
      res.json({ success: true, newAttendance, message: msg });
    } catch (error) {
      res.json({ success: false, error });
    }
  };

  viewEmployeeAttendance = async (req, res, next) => {
    try {
      const data = req.body;
      console.log("Request Body Data:", data); // Log the incoming request data

      const resp = await attendanceService.findAllAttendance(data);
      console.log("Attendance Response:", resp); // Log the response from the service

      if (!resp || resp.length === 0) {
        return next(ErrorHandler.notFound("No Attendance found"));
      }

      res.json({ success: true, data: resp });
    } catch (error) {
      console.error("Error fetching attendance:", error); // Log the error
      res
        .status(500)
        .json({ success: false, error: error.message || "An error occurred" });
    }
  };

  applyLeaveApplication = async (req, res, next) => {
    try {
      const data = req.body;
      const {
        applicantID,
        title,
        type,
        startDate,
        endDate,
        appliedDate,
        period,
        reason,
      } = data;
      const newLeaveApplication = {
        applicantID,
        title,
        type,
        startDate,
        endDate,
        appliedDate,
        period,
        reason,
        adminResponse: "Pending",
      };

      const isLeaveApplied = await userService.findLeaveApplication({
        applicantID,
        startDate,
        endDate,
        appliedDate,
      });
      if (isLeaveApplied)
        return next(ErrorHandler.notAllowed("Leave Already Applied"));

      const resp = await userService.createLeaveApplication(
        newLeaveApplication
      );
      if (!resp) return next(ErrorHandler.serverError("Failed to apply leave"));

      res.json({ success: true, data: resp });
    } catch (error) {
      res.json({ success: false, error });
    }
  };

  viewLeaveApplications = async (req, res, next) => {
    try {
      const data = req.body;
      const resp = await userService.findAllLeaveApplications(data);
      if (!resp)
        return next(ErrorHandler.notFound("No Leave Applications found"));

      res.json({ success: true, data: resp });
    } catch (error) {
      res.json({ success: false, error });
    }
  };

  updateLeaveApplication = async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const isLeaveUpdated = await userService.updateLeaveApplication(id, body);
      if (!isLeaveUpdated)
        return next(ErrorHandler.serverError("Failed to update leave"));
      res.json({ success: true, message: "Leave Updated" });
    } catch (error) {
      res.json({ success: false, error });
    }
  };

  assignEmployeeSalary = async (req, res, next) => {
    try {
      const data = req.body;
      const obj = {
        employeeID: data.employeeID,
      };
      const isSalaryAssigned = await userService.findSalary(obj);
      if (isSalaryAssigned)
        return next(ErrorHandler.serverError("Salary already assigned"));

      const d = new Date();
      data["assignedDate"] =
        d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      const resp = await userService.assignSalary(data);
      if (!resp)
        return next(ErrorHandler.serverError("Failed to assign salary"));
      res.json({ success: true, data: resp });
    } catch (error) {
      res.json({ success: false, error });
    }
  };

  updateEmployeeSalary = async (req, res, next) => {
    try {
      const body = req.body;
      const { employeeID } = body;
      const d = new Date();
      body["assignedDate"] =
        d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      const isSalaryUpdated = await userService.updateSalary(
        { employeeID },
        body
      );
      console.log(isSalaryUpdated);
      if (!isSalaryUpdated)
        return next(ErrorHandler.serverError("Failed to update salary"));
      res.json({ success: true, message: "Salary Updated" });
    } catch (error) {
      res.json({ success: false, error });
    }
  };

  viewSalary = async (req, res, next) => {
    try {
      const data = req.body;
      const resp = await userService.findAllSalary(data);
      if (!resp) return next(ErrorHandler.notFound("No Salary Found"));
      res.json({ success: true, data: resp });
    } catch (error) {
      res.json({ success: false, error });
    }
  };
}

module.exports = new UserController();