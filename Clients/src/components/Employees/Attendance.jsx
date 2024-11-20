import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { viewEmployeeAttendance } from "../../http";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const AttendanceCalendar = () => {
  const { user } = useSelector((state) => state.authSlice);
  const [attendance, setAttendance] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState(null);
  const [isCurrentMonth, setIsCurrentMonth] = useState(true);
  const [previousMonthAttendance, setPreviousMonthAttendance] = useState([]);
  const [currentMonthName, setCurrentMonthName] = useState("");
  const [previousMonthName, setPreviousMonthName] = useState("");

  const fetchAttendance = async (month, year) => {
    try {
      const obj = {
        employeeID: user.id,
        year: year,
        month: month,
      };
      const res = await viewEmployeeAttendance(obj);
      if (res.success) {
        if (month === new Date().getMonth() + 1) {
          setAttendance(res.data);
        } else {
          setPreviousMonthAttendance(res.data);
        }
      } else {
        if (month === new Date().getMonth() + 1) {
          setAttendance([]);
          setError("No attendance data found");
        } else {
          setPreviousMonthAttendance([]);
        }
      }
    } catch (error) {
      setError("Failed to fetch attendance data");
    }
  };

  useEffect(() => {
    const dt = new Date();
    setCurrentMonthName(dt.toLocaleString("default", { month: "long" })); // Get the name of the current month
    const previousMonthDate = new Date(dt.getFullYear(), dt.getMonth() - 1, 1);
    setPreviousMonthName(
      previousMonthDate.toLocaleString("default", { month: "long" })
    ); // Get the name of the previous month
    fetchAttendance(dt.getMonth() + 1, dt.getFullYear()); // Fetch current month's data
  }, [user.id]);

  const toggleMonth = () => {
    const dt = new Date();
    if (isCurrentMonth) {
      const previousMonthDate = new Date(
        dt.getFullYear(),
        dt.getMonth() - 1,
        1
      );
      setSelectedDate(previousMonthDate); // Set the date to previous month
      fetchAttendance(
        previousMonthDate.getMonth() + 1,
        previousMonthDate.getFullYear()
      );
    } else {
      const currentMonthDate = new Date();
      setSelectedDate(currentMonthDate); // Set the date back to current month
      fetchAttendance(
        currentMonthDate.getMonth() + 1,
        currentMonthDate.getFullYear()
      );
    }
    setIsCurrentMonth(!isCurrentMonth);
  };

  const getAttendanceStatus = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const record =
      attendance.find(
        (entry) =>
          entry.date === day && entry.month === month && entry.year === year
      ) ||
      previousMonthAttendance.find(
        (entry) =>
          entry.date === day && entry.month === month && entry.year === year
      ) ||
      {};

    return record ? record.status : "";
  };

  const calculateTotals = (attendanceData) => {
    const totals = {
      Present: 0,
      "Half Day": 0,
      Absent: 0,
    };

    attendanceData.forEach((entry) => {
      if (entry.status in totals) {
        totals[entry.status] += 1;
      }
    });

    return totals;
  };

  const totals = calculateTotals(attendance);
  const prevMonthTotals = calculateTotals(previousMonthAttendance);

  return (
    <div className="main-content">
      <style>
        {`
    .main-content {
      height: 100vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #121212;
      font-family: "Arial", sans-serif;
      color: #e0e0e0;
    }

    .error-message {
      color: #ff6f61;
      text-align: center;
      margin: 20px;
      font-size: 1.2em;
    }

    .calendar-container {
      margin: 20px auto;
      max-width: 1200px;
      width: 90%;
    }

    .summary-box {
      border: 1px solid #444;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
      text-align: center;
      background-color: #1e1e1e;
    }

    .summary-items {
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
    }

    .summary-item {
      text-align: center;
      flex: 1;
      padding: 10px;
    }

    .summary-item p {
      margin: 0;
      font-size: 1.1em;
    }

    .summary-item.present p {
      color: #4caf50;
      font-weight: bold;
    }

    .summary-item.half-day p {
      color: #ffc107;
      font-weight: bold;
    }

    .summary-item.absent p {
      color: #f44336;
      font-weight: bold;
    }

    .custom-calendar {
      width: 100%;
      height: 500px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    }

    .react-calendar {
      background-color: #1e1e1e;
      border: none;
    }

    .react-calendar__month-view {
      padding: 10px;
    }

    .react-calendar__navigation__label {
      color: #ffffff;
      font-weight: bold;
    }

    .react-calendar__navigation button {
      color: #ffffff;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .react-calendar__navigation button:hover {
      color: #ff6f61;
    }

    .react-calendar__tile {
      padding: 15px;
      border-radius: 8px;
      transition: background-color 0.3s ease, color 0.3s ease;
      box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
      color: #ffffff;
      font-size: 1em;
    }

    .react-calendar__tile--active {
      background-color: #42a5f5;
      color: white;
    }

    .react-calendar__tile--now {
      background-color: #00695c;
      color: white;
    }

    .react-calendar__tile:hover {
      background-color: #ffffff;
      color: #121212;
    }

    .react-calendar__tile--disabled {
      color: #bdbdbd;
    }

    .present {
      color: #4caf50;
    }

    .half-day {
      color: #ffc107;
    }

    .absent {
      color: #f44336;
    }

    .react-calendar__tile--active {
      background-color: #ff6f61;
    }
  `}
      </style>
      {error && <div className="error-message">{error}</div>}
      {attendance.length === 0 && previousMonthAttendance.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="summary-box">
            <p>
              <strong>Attendance Summary</strong>
            </p>
            <div className="summary-items">
              <div className="summary-item present">
                <p>
                  {isCurrentMonth
                    ? "Present"
                    : `Prev. Month - ${previousMonthName}`}{" "}
                  : {isCurrentMonth ? totals.Present : prevMonthTotals.Present}
                </p>
              </div>
              <div className="summary-item half-day">
                <p>
                  {isCurrentMonth
                    ? "Half Day"
                    : `Prev. Month - ${previousMonthName}`}{" "}
                  :{" "}
                  {isCurrentMonth
                    ? totals["Half Day"]
                    : prevMonthTotals["Half Day"]}
                </p>
              </div>
              <div className="summary-item absent">
                <p>
                  {isCurrentMonth
                    ? "Absent"
                    : `Prev. Month - ${previousMonthName}`}{" "}
                  : {isCurrentMonth ? totals.Absent : prevMonthTotals.Absent}
                </p>
              </div>
            </div>
          </div>
          <div className="calendar-container">
            <button onClick={toggleMonth}>
              {isCurrentMonth
                ? `Current Month - ${currentMonthName}`
                : `Previous Month - ${previousMonthName}`}
            </button>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              locale="en-IN"
              className="custom-calendar"
              tileContent={({ date, view }) => {
                if (view === "month") {
                  const status = getAttendanceStatus(date);
                  if (status) {
                    return <div className={status.toLowerCase()}>{status}</div>;
                  }
                }
                return null;
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AttendanceCalendar;
