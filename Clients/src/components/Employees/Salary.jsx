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

  useEffect(() => {
    const obj = {
      employeeID: user.id,
    };

    const fetchSalary = async () => {
      const res = await viewEmployeeSalary(obj);
      const { success, data } = res;
      if (data.length > 0) {
        setSalary(data[0]);
      } else {
        toast.error(user.name + "'s" + " " + "Salary not found");
      }
    };

    const fetchAttendance = async () => {
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
    };

    fetchSalary();
    fetchAttendance();

    const monthName = new Date().toLocaleString("default", { month: "long" });
    setCurrentMonth(monthName);
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
      {salary ? (
        <div className="main-content">
          <section className="section">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4>Salary for {currentMonth}</h4>
              </div>
            </div>

            <div className={`card ${salary ? "" : "d-none"}`}>
              <div className="card-body row">
                <div className="col-md-3">
                  <img
                    className="img-fluid img-thumbnail"
                    src={user.image}
                    alt="Employee"
                  />
                </div>
                <div className="col-md-9">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colSpan="2" className="text-center">
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
                        <td>Rs. {salary?.salary}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h4>Attendance Counts</h4>
              </div>
              <div className="card-body">
                <h5>Total Present: {attendanceCounts.present}</h5>
                <h5>Total Absent: {attendanceCounts.absent}</h5>
                <h5>Total Half Day: {attendanceCounts.halfDay}</h5>
                <h5>Calculated Salary: Rs. {calculatedSalary}</h5>
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

export default Salary;
