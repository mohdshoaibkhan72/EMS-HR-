import React, { useEffect, useState } from "react";
import { markEmployeeAttendance, getEmployees } from "../../http"; // Import the getEmployees function
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../Loading";
import "./MarkAttendance.css"; // Import the CSS file

const MarkAttendance = () => {
  const { user } = useSelector((state) => state.authSlice);
  const [employees, setEmployees] = useState([]); // State for storing employees
  const [loading, setLoading] = useState(true); // State for loading
  const [attendanceLoading, setAttendanceLoading] = useState(null); // State for individual attendance loading
  const [attendanceData, setAttendanceData] = useState({}); // State for storing attendance input

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await getEmployees(); // Fetch employees from API
        console.log("Employees fetched:", res); // Log the fetched employees
        setEmployees(res.data); // Set employees data
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch employees.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleChange = (e, employeeID) => {
    const { name, value } = e.target;
    setAttendanceData((prevData) => ({
      ...prevData,
      [employeeID]: {
        ...prevData[employeeID],
        [name]: value,
      },
    }));
  };

  const handleMarkAttendance = async (employeeID) => {
    const { attendanceDate, status } = attendanceData[employeeID] || {};

    // Basic validation for attendance data
    if (!attendanceDate || !status) {
      toast.error("Please select a valid date and status.");
      return;
    }

    // Prevent future dates
    if (new Date(attendanceDate) > new Date()) {
      toast.error("Attendance date cannot be in the future.");
      return;
    }

    setAttendanceLoading(employeeID); // Set loading for specific employee
    try {
      const res = await markEmployeeAttendance({
        employeeID,
        attendanceDate,
        status,
      });
      console.log("Attendance mark response:", res); // Log the response
      const { success, message } = res;

      if (success) {
        toast.success(message);
      } else {
        toast.error("Failed to mark attendance. Please try again.");
      }
    } catch (error) {
      console.error("Error marking attendance:", error); // Log the error
      toast.error("An error occurred while marking attendance.");
    } finally {
      setAttendanceLoading(null);
    }
  };

  const confirmMarkAttendance = async (employeeID) => {
    const confirm = window.confirm("Are you sure you want to mark attendance?");
    if (confirm) {
      await handleMarkAttendance(employeeID);
    }
  };

  return (
    <div className="main-content">
      <section className="section">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="attendance-header">Mark Attendance</h4>
          </div>
          <div className="card-body">
            {loading ? (
              <Loading />
            ) : (
              <div>
                {employees.length === 0 ? (
                  <p>No employees available to mark attendance.</p>
                ) : (
                  employees.map((employee) => (
                    <div key={employee._id} className="attendance-item mb-3">
                      <span className="employee-name">{employee.name}</span>

                      {/* Date input for selecting the attendance date */}
                      <input
                        type="date"
                        name="attendanceDate"
                        value={
                          attendanceData[employee.id]?.attendanceDate || ""
                        }
                        onChange={(e) => handleChange(e, employee.id)}
                        className="form-control my-2 attendance-date"
                        max={new Date().toISOString().split("T")[0]} // Prevent future dates
                      />

                      {/* Dropdown to select attendance status */}
                      <select
                        name="status"
                        value={attendanceData[employee.id]?.status || ""}
                        onChange={(e) => handleChange(e, employee.id)}
                        className="form-control my-2 attendance-status"
                      >
                        <option value="">Select Status</option>
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Half Day">Half Day</option>
                      </select>

                      <button
                        className="btn btn-primary attendance-button"
                        onClick={() => confirmMarkAttendance(employee.id)}
                        disabled={
                          attendanceLoading === employee.id ||
                          !attendanceData[employee.id]?.attendanceDate ||
                          !attendanceData[employee.id]?.status
                        }
                      >
                        {attendanceLoading === employee.id
                          ? "Loading..."
                          : "Mark Attendance"}
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarkAttendance;
