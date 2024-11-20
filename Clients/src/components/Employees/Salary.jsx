import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { viewEmployeeSalary, viewEmployeeAttendance } from "../../http"; // Ensure both functions are defined
import { toast } from "react-toastify";
import Loading from "../Loading";

const Salary = () => {
  const { user } = useSelector((state) => state.authSlice);
  const [salary, setSalary] = useState();
  const [attendanceCounts, setAttendanceCounts] = useState({
    present: 0,
    absent: 0,
    halfDay: 0,
  });
  const [calculatedSalary, setCalculatedSalary] = useState(0);
  const [currentMonth, setCurrentMonth] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const obj = {
      employeeID: user.id,
    };

    const fetchSalary = async () => {
      try {
        const res = await viewEmployeeSalary(obj);
        const { success, data } = res;
        if (data.length > 0) {
          setSalary(data[0]);
        } else {
          toast.error(`${user.name}'s salary not found`);
        }
      } catch (error) {
        toast.error("Error fetching salary data");
      }
    };

    const fetchAttendance = async () => {
      try {
        const res = await viewEmployeeAttendance(obj);
        const { success, data } = res;
        if (success && data.length > 0) {
          const presentCount = data.filter(
            (record) => record.status === "Present"
          ).length;
          const absentCount = data.filter(
            (record) => record.status === "Absent"
          ).length;
          const halfDayCount = data.filter(
            (record) => record.status === "Half Day"
          ).length;

          setAttendanceCounts({
            present: presentCount,
            absent: absentCount,
            halfDay: halfDayCount,
          });
        } else {
          toast.error("No attendance records found.");
        }
      } catch (error) {
        toast.error("Error fetching attendance data");
      }
    };

    fetchSalary();
    fetchAttendance();

    const monthName = new Date().toLocaleString("default", { month: "long" });
    setCurrentMonth(monthName);

    setLoading(false); // Set loading state to false after data fetching
  }, [user.id]);

  useEffect(() => {
    if (salary) {
      const totalDaysInMonth = new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        0
      ).getDate();
      const dailySalary = salary.salary / totalDaysInMonth;
      const totalPresent =
        attendanceCounts.present + attendanceCounts.halfDay * 0.5;
      const calculated = dailySalary * totalPresent;
      setCalculatedSalary(calculated.toFixed(2));
    }
  }, [salary, attendanceCounts]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="main-content"
          style={{ backgroundColor: "#121212", color: "#E0E0E0" }}
        >
          <section className="section">
            <div className="card" style={{ backgroundColor: "#1E1E1E" }}>
              <div
                className="card-header d-flex justify-content-between"
                style={{ backgroundColor: "#1F3A6D", color: "#E0E0E0" }}
              >
                <h4>Salary for {currentMonth}</h4>
              </div>
            </div>

            <div
              className={`card ${salary ? "" : "d-none"}`}
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div className="card-body row">
                <div className="col-md-3">
                  <img
                    className="img-fluid img-thumbnail"
                    src={user.image}
                    alt="Employee"
                    style={{
                      borderRadius: "10px",
                      borderColor: "#4CAF50",
                    }}
                  />
                </div>
                <div className="col-md-9">
                  <table
                    className="table table-bordered"
                    style={{ color: "#E0E0E0" }}
                  >
                    <thead>
                      <tr>
                        <th
                          colSpan="2"
                          className="text-center"
                          style={{
                            backgroundColor: "#1F3A6D",
                            color: "#E0E0E0",
                          }}
                        >
                          Employee Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                      </tr>
                      <tr>
                        <th>Monthly Salary</th>
                        <td className="text-success">Rs. {salary?.salary}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Attendance and Salary Card */}
            <div className="card mt-4" style={{ backgroundColor: "#1E1E1E" }}>
              <div
                className="card-header"
                style={{ backgroundColor: "#1F3A6D", color: "#E0E0E0" }}
              >
                <h4>Attendance Details and Calculated Salary</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  {/* Attendance Details */}
                  <div className="col-md-6">
                    <h5 className="text-info">Attendance Counts</h5>
                    <table
                      className="table table-bordered"
                      style={{ color: "#E0E0E0" }}
                    >
                      <tbody>
                        <tr>
                          <th className="bg-success text-white">
                            Total Present
                          </th>
                          <td className="text-success">
                            {attendanceCounts.present}
                          </td>
                        </tr>
                        <tr>
                          <th className="bg-danger text-white">Total Absent</th>
                          <td className="text-danger">
                            {attendanceCounts.absent}
                          </td>
                        </tr>
                        <tr>
                          <th className="bg-warning text-dark">
                            Total Half Day
                          </th>
                          <td className="text-warning">
                            {attendanceCounts.halfDay}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Salary Details */}
                  <div className="col-md-6">
                    <h5 className="text-info">Salary Breakdown</h5>
                    <table
                      className="table table-bordered"
                      style={{ color: "#E0E0E0" }}
                    >
                      <tbody>
                        <tr>
                          <th className="bg-info text-white">Monthly Salary</th>
                          <td className="text-success">Rs. {salary?.salary}</td>
                        </tr>
                        <tr>
                          <th className="bg-info text-white">
                            Calculated Salary
                          </th>
                          <td className="text-success">
                            Rs. {calculatedSalary}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Salary;
