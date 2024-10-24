import React, { useEffect, useState } from "react";
import { markEmployeeAttendance, getEmployees } from "../../http";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../Loading";
import "./MarkAttendance.css";

const MarkAttendance = () => {
  const { user } = useSelector((state) => state.authSlice);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attendanceLoading, setAttendanceLoading] = useState(null);
  const [attendanceData, setAttendanceData] = useState({});

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await getEmployees();
        console.log("Employees fetched:", res);
        setEmployees(res.data);
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

    setAttendanceLoading(employeeID);
    try {
      const res = await markEmployeeAttendance({
        employeeID,
        attendanceDate,
        status,
      });
      console.log("Attendance mark response:", res);
      const { success, message } = res;

      success ? toast.success(message) : toast.error(message);
    } catch (error) {
      console.error("Error marking attendance:", error);
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

                      <input
                        type="date"
                        name="attendanceDate"
                        value={
                          attendanceData[employee.id]?.attendanceDate || ""
                        }
                        onChange={(e) => handleChange(e, employee.id)}
                        className="form-control my-2 attendance-date"
                        max={new Date().toISOString().split("T")[0]}
                        aria-label={`Attendance date for ${employee.name}`}
                      />

                      <select
                        name="status"
                        value={attendanceData[employee.id]?.status || ""}
                        onChange={(e) => handleChange(e, employee.id)}
                        className="form-control my-2 attendance-status"
                        aria-label={`Attendance status for ${employee.name}`}
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
