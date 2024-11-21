import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { viewEmployeeSalary, viewEmployeeAttendance } from "../../http"; // Ensure both functions are defined
import { toast } from "react-toastify";
import Loading from "../Loading";

const Salary = () => {
  const { user } = useSelector((state) => state.authSlice);
  const [salary, setSalary] = useState(null);
  const [attendanceCounts, setAttendanceCounts] = useState({
    present: 0,
    absent: 0,
    halfDay: 0,
  });
  const [calculatedSalary, setCalculatedSalary] = useState(0);
  const [currentMonth, setCurrentMonth] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Set default to current month
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Set default to current year
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const obj = {
      employeeID: user.id,
    };

    // Function to fetch Salary Data
    const fetchSalary = async () => {
      try {
        const res = await viewEmployeeSalary(obj);
        const { success, data } = res;
        if (success && data.length > 0) {
          setSalary(data[0]);
        } else {
          toast.error(`${user.name}'s salary not found`);
        }
      } catch (error) {
        toast.error("Error fetching salary data");
      }
    };

    // Function to fetch Attendance Data for selected month and year
    const fetchAttendance = async () => {
      try {
        const res = await viewEmployeeAttendance(obj);
        const { success, data } = res;
        if (success && data.length > 0) {
          const monthlyAttendance = [];

          // Filter the data by year and month
          for (let month = 1; month <= 12; month++) {
            const monthData = data.filter(
              (record) => record.year === selectedYear && record.month === month
            );
            const attendance = monthData.length > 0 ? monthData : null;
            monthlyAttendance.push({
              month: month,
              data: attendance,
            });
          }

          setMonthlyData(monthlyAttendance);
        } else {
          toast.error("No attendance records found.");
        }
      } catch (error) {
        toast.error("Error fetching attendance data");
      }
    };

    // Fetch Salary and Attendance data
    const fetchData = async () => {
      await fetchSalary();
      await fetchAttendance();
      setLoading(false);
    };

    fetchData();
  }, [user.id, selectedMonth, selectedYear]);

  useEffect(() => {
    if (salary) {
      const totalDaysInMonth = new Date(
        selectedYear,
        selectedMonth,
        0
      ).getDate();
      const dailySalary = salary.salary / totalDaysInMonth;
      const monthAttendance = monthlyData.find(
        (item) => item.month === selectedMonth
      );

      let presentCount = 0;
      let absentCount = 0;
      let halfDayCount = 0;

      if (monthAttendance && monthAttendance.data) {
        presentCount = monthAttendance.data.filter(
          (record) => record.status === "Present"
        ).length;
        absentCount = monthAttendance.data.filter(
          (record) => record.status === "Absent"
        ).length;
        halfDayCount = monthAttendance.data.filter(
          (record) => record.status === "Half Day"
        ).length;
      }

      setAttendanceCounts({
        present: presentCount,
        absent: absentCount,
        halfDay: halfDayCount,
      });

      const totalPresent = presentCount + halfDayCount * 0.5; // Calculate total present (half day counts as 0.5)
      const calculated = dailySalary * totalPresent;
      setCalculatedSalary(calculated.toFixed(2));
    }
  }, [salary, selectedMonth, selectedYear, monthlyData]);

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
                <h4>
                  Salary for{" "}
                  {new Date(selectedYear, selectedMonth - 1).toLocaleString(
                    "default",
                    { month: "long" }
                  )}{" "}
                  {selectedYear}
                </h4>
                <div>
                  <select
                    className="custom-dropdown"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(Number(e.target.value))}
                  >
                    {Array.from({ length: 12 }, (_, index) => index + 1).map(
                      (month) => (
                        <option key={month} value={month}>
                          {new Date(selectedYear, month - 1).toLocaleString(
                            "default",
                            { month: "long" }
                          )}
                        </option>
                      )
                    )}
                  </select>
                  <select
                    className="custom-dropdown mt-2"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                  >
                    {Array.from(
                      { length: 3 },
                      (_, index) => selectedYear - index
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {monthlyData
              .filter((item) => item.month === selectedMonth)
              .map((item, index) => (
                <div
                  key={index}
                  className={`card ${item.data ? "" : "d-none"}`}
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
                            <td className="text-success">
                              Rs. {salary?.salary}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}

            <div className="card mt-4" style={{ backgroundColor: "#1E1E1E" }}>
              <div
                className="card-header"
                style={{ backgroundColor: "#1F3A6D", color: "#E0E0E0" }}
              >
                <h4>Attendance Details and Calculated Salary</h4>
              </div>
              <div className="card-body">
                <div className="row">
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
                            Total Half Days
                          </th>
                          <td className="text-warning">
                            {attendanceCounts.halfDay}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-info">Calculated Salary</h5>
                    <table
                      className="table table-bordered"
                      style={{ color: "#E0E0E0" }}
                    >
                      <tbody>
                        <tr>
                          <th>Calculated Salary</th>
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
      <style>
        {`
        /* Custom Dropdown */
        .custom-dropdown {
          background-color: #1e1e1e;
          border: 2px solid #4caf50;
          padding: 8px 12px;
          color: #e0e0e0;
          border-radius: 8px;
          width: 100%;
          font-size: 14px;
          font-family: 'Arial', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-dropdown:focus {
          border-color: #00e676;
          outline: none;
        }
        .custom-dropdown option {
          background-color: #2c2c2c;
          color: #e0e0e0;
          padding: 5px;
          font-size: 14px;
        }
        .custom-dropdown option:hover {
          background-color: #3a3a3a;
        }
        `}
      </style>
    </>
  );
};

export default Salary;
