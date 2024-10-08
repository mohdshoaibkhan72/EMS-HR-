import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default calendar styling
import { viewEmployeeAttendance } from "../../http";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const AttendanceCalendar = () => {
  const { user } = useSelector((state) => state.authSlice);
  const [attendance, setAttendance] = useState([]); // Start with an empty array
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState(null); // State to handle errors

  // Fetch attendance data for the user when the component mounts
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const dt = new Date();
        const obj = {
          employeeID: user.id,
          year: dt.getFullYear(),
          month: dt.getMonth() + 1,
        };
        const res = await viewEmployeeAttendance(obj);
        if (res.success) {
          setAttendance(res.data); // Set attendance data directly
          console.log("Attendance data set:", res.data); // Log attendance data
        } else {
          setError("No attendance data found");
        }
      } catch (error) {
        setError("Failed to fetch attendance data");
        console.error("Failed to fetch attendance data", error);
      }
    };
    fetchAttendance();
  }, [user.id]);

  // Get attendance status for a specific date
  const getAttendanceStatus = (date) => {
    if (attendance.length === 0) return null; // Check if attendance is empty

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed in JS
    const year = date.getFullYear();

    const record = attendance.find(
      (entry) =>
        entry.date === day && entry.month === month && entry.year === year
    );

    return record ? record.status : ""; // Return the attendance status or empty if no record found
  };

  // Calculate totals for the month
  const calculateTotals = () => {
    const totals = {
      Present: 0,
      "Half Day": 0,
      Absent: 0,
    };

    attendance.forEach((entry) => {
      if (entry.status in totals) {
        totals[entry.status] += 1;
      }
    });

    return totals;
  };

  const totals = calculateTotals(); // Get attendance totals

  return (
    <div
      className="main-content"
      style={{
        height: "80vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {error && (
        <div style={{ color: "red", textAlign: "center", margin: "20px" }}>
          {error}
        </div>
      )}
      {attendance.length > 0 ? (
        <div style={{ margin: "20px auto", maxWidth: "1200px", width: "100%" }}>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>Monthly Attendance Summary</h3>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "green", fontWeight: "bold" }}>
                  Present: {totals.Present}
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "orange", fontWeight: "bold" }}>
                  Half Day: {totals["Half Day"]}
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "red", fontWeight: "bold" }}>
                  Absent: {totals.Absent}
                </p>
              </div>
            </div>
          </div>
          {/* Calendar Component */}
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            className="custom-calendar"
            tileContent={({ date, view }) => {
              if (view === "month") {
                const status = getAttendanceStatus(date);
                let backgroundColor = "white";

                // Set background color based on attendance status
                if (status) {
                  switch (status) {
                    case "Present":
                      backgroundColor = "green";
                      break;
                    case "Absent":
                      backgroundColor = "red";
                      break;
                    case "Half Day":
                      backgroundColor = "yellow"; // For Half Day
                      break;
                    default:
                      backgroundColor = "white";
                  }
                }

                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      backgroundColor: backgroundColor, // Set background color based on status
                      borderRadius: "4px", // Optional: add a slight border radius for aesthetics
                    }}
                  >
                    {/* Removed the text for attendance status */}
                  </div>
                );
              }
              return null;
            }}
            style={{ width: "100%", height: "500px" }} // Set width and height for the calendar
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AttendanceCalendar;
