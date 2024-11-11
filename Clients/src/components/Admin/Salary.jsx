import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getEmployee,
  getLeader,
  updateSalary,
  viewAllSalaries,
  getAttendance,
} from "../../http";
import { toast } from "react-toastify";
import Loading from "../Loading";
import HeaderSection from "../../components/HeaderSection";

const SalaryView = () => {
  const { id } = useParams();
  const [salary, setSalary] = useState();
  const [employee, setEmployee] = useState();
  const initialState = { salary: "", bonus: "", reasonForBonus: "" };
  const [formData, setFormData] = useState(initialState);
  const [monthlySalary, setMonthlySalary] = useState(0); // Last month's salary based on attendance
  const [lastMonthName, setLastMonthName] = useState(""); // Name of last month

  // Attendance data
  const [attendanceData, setAttendanceData] = useState({
    totalDays: 0,
    presentDays: 0,
    absentDays: 0,
    halfDays: 0,
    totalWorkDays: 0, // Total workdays (Present days + Half days counted as 0.5)
  });

  // Fetch employee and salary details
  useEffect(() => {
    const fetchData = async () => {
      const obj = { _id: id };
      const res = await viewAllSalaries(obj);
      const empRes = await getEmployee(res.data[0].employeeID);
      const leaderRes = await getLeader(res.data[0].employeeID);

      if (empRes.success) setEmployee(empRes.data);
      if (leaderRes.success) setEmployee(leaderRes.data);

      setSalary(res.data[0]);

      // Calculate salary for the previous month
      if (res.data[0]) {
        calculateLastMonthSalary(res.data[0].employeeID, res.data[0].salary);
      }
    };
    fetchData();
  }, []);

  // Calculate last month's salary based on attendance
  const calculateLastMonthSalary = async (employeeID, baseSalary) => {
    const date = new Date();
    const lastMonth = date.getMonth(); // Current month (0-11)
    const year = date.getFullYear(); // Current year
    const previousMonth = lastMonth === 0 ? 11 : lastMonth - 1; // Adjust for December (previous month)

    // Get the total days in the previous month
    const totalDaysInLastMonth = new Date(year, previousMonth + 1, 0).getDate();

    // Get the name of the last month
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setLastMonthName(monthNames[previousMonth]);

    // Fetch attendance data for the previous month
    const attendanceRes = await getAttendance({
      employeeID,
      month: previousMonth + 1, // Month is 1-indexed
      year,
    });

    let attendedDays = 0;
    let absentDays = 0;
    let halfDays = 0;
    let totalWorkDays = 0; // Track total work days (present + half day count)

    // Calculate attended days with half-day adjustments for the previous month
    attendanceRes.data.forEach((att) => {
      if (att.status === "Present") {
        attendedDays += 1; // Full day
      } else if (att.status === "Half Day") {
        halfDays += 1; // Count half-day attendance
      } else if (att.status === "Absent") {
        absentDays += 1; // Absent day
      }
    });

    // Calculate total work days as present days + half days (half days are 0.5 of a full day)
    totalWorkDays = attendedDays + halfDays / 2;

    const dailySalary = baseSalary / totalDaysInLastMonth;

    // Calculate the salary based on attended days (including half-days) for the previous month
    const calculatedSalary =
      attendedDays * dailySalary + halfDays * (dailySalary / 2);

    // Set attendance data state
    setAttendanceData({
      totalDays: totalDaysInLastMonth,
      presentDays: attendedDays,
      absentDays: absentDays,
      halfDays: halfDays,
      totalWorkDays: totalWorkDays, // Total work days (including half days as 0.5)
    });

    setMonthlySalary(calculatedSalary);
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setFormData((old) => ({ ...old, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { salary, bonus, reasonForBonus } = formData;
    if (!salary || !bonus || !reasonForBonus)
      return toast.error("All Fields Required");

    formData["employeeID"] = employee.id;
    const res = await updateSalary(formData);
    const { success } = res;

    if (success) {
      toast.success("Salary Updated!");
      setFormData(initialState);
    }
  };

  return (
    <>
      {employee ? (
        <div className="main-content">
          <section className="section">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4>Updated Salary from {salary?.assignedDate}</h4>
              </div>
            </div>

            <div className="col-md-9">
              {/* Employee Details */}
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{employee?.name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{employee?.email}</td>
                  </tr>
                  <tr>
                    <th>Mobile Number</th>
                    <td>{employee?.mobile}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Box for Last Month (October) */}
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h4>{lastMonthName} Salary and Attendance</h4>
              </div>
              <div className="card-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Salary for {lastMonthName}</th>
                      <td>{monthlySalary.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <th>Total Days in {lastMonthName}</th>
                      <td>{attendanceData.totalDays}</td>
                    </tr>
                    <tr>
                      <th>Present Days</th>
                      <td>{attendanceData.presentDays}</td>
                    </tr>
                    <tr>
                      <th>Half Days</th>
                      <td>{attendanceData.halfDays}</td>
                    </tr>
                    <tr>
                      <th>Total Work Days (Present + Half Days as 0.5)</th>
                      <td>{attendanceData.totalWorkDays.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <th>Absent Days</th>
                      <td>{attendanceData.absentDays}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Box for Current Month Salary and Attendance */}
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h4>Current Month Salary and Attendance</h4>
              </div>
              <div className="card-body">
                {/* Replace with actual current month's data */}
                <p>Display current month's data here...</p>
              </div>
            </div>
          </section>

          {/* Salary Update Form */}
          <section className="section">
            <HeaderSection title="Update Salary" />
            <div className="card">
              <div className="card-body pr-5 pl-5 m-1">
                <form className="row" onSubmit={onSubmit} id="addUserForm">
                  <div className="form-group col-md-6">
                    <label>Enter Salary</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-pen"></i>
                        </div>
                      </div>
                      <input
                        onChange={inputEvent}
                        value={formData.salary}
                        type="number"
                        id="salary"
                        name="salary"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group col-md-6">
                    <label>Bonus</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-pen"></i>
                        </div>
                      </div>
                      <input
                        onChange={inputEvent}
                        value={formData.bonus}
                        type="number"
                        id="bonus"
                        name="bonus"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group col-md-12">
                    <label>Reason for Bonus</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-pen"></i>
                        </div>
                      </div>
                      <input
                        onChange={inputEvent}
                        value={formData.reasonForBonus}
                        type="text"
                        id="reasonForBonus"
                        name="reasonForBonus"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group col-md-12">
                    <button className="btn btn-primary">Update Salary</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SalaryView;
