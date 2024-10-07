import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Keep this for default calendar styling
import { viewEmployeeAttendance } from "../../http";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const AttendanceCalendar = () => {
  const { user } = useSelector((state) => state.authSlice);
  const [attendance, setAttendance] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

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
        setAttendance(res.data);
      } catch (error) {
        console.error("Failed to fetch attendance data", error);
      }
    };
    fetchAttendance();
  }, [user.id]);

  // Get attendance status for a specific date
  const getAttendanceStatus = (date) => {
    if (!attendance) return null;

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const record = attendance.find(
      (entry) =>
        entry.date === day && entry.month === month && entry.year === year
    );

    if (record) {
      if (record.present === true) return "Present";
      if (record.halfDay === true) return "Half-day";
      if (record.leave === true) return "Leave";
      return "Absent"; // Default to Absent if none match
    }

    return null;
  };

  return (
    <div className="main-content">
      {attendance ? (
        <div style={{ margin: "20px auto", maxWidth: "800px" }}>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            tileContent={({ date, view }) => {
              if (view === "month") {
                const status = getAttendanceStatus(date);
                return (
                  <div>
                    {status && (
                      <span
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          padding: "5px",
                          borderRadius: "4px",
                          color: "white",
                          backgroundColor:
                            status === "Present"
                              ? "green"
                              : status === "Absent"
                              ? "red"
                              : status === "Leave"
                              ? "blue"
                              : "orange", // Half-day
                        }}
                      >
                        {status}
                      </span>
                    )}
                  </div>
                );
              }
              return null;
            }}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AttendanceCalendar;
