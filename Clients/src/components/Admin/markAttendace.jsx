import React, { useEffect, useState } from "react";
import { markEmployeeAttendance, getEmployees } from "../../http"; // Import the getEmployees function
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../Loading";

const MarkAttendance = () => {
  const { user } = useSelector((state) => state.authSlice);
  const [employees, setEmployees] = useState([]); // State for storing employees
  const [loading, setLoading] = useState(true); // State for loading
  const [attendanceLoading, setAttendanceLoading] = useState(null); // State for individual attendance loading

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

  const handleMarkAttendance = async (employeeID) => {
    setAttendanceLoading(employeeID); // Set loading for specific employee
    try {
      const res = await markEmployeeAttendance({ employeeID });
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
            <h4>Mark Attendance</h4>
          </div>
          <div className="card-body">
            {loading ? (
              <Loading />
            ) : (
              <div>
                {employees.map((employee) => (
                  <div
                    key={employee._id}
                    className="d-flex justify-content-between align-items-center mb-2"
                  >
                    <span>{employee.name}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => confirmMarkAttendance(employee.id)}
                      disabled={attendanceLoading === employee.id}
                    >
                      {attendanceLoading === employee.id
                        ? "Loading..."
                        : "Mark Attendance"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarkAttendance;
