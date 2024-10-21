import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default calendar styling
import { viewEmployeeAttendance } from "../../http";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const AttendanceCalendar = () => {
  const { user } = useSelector((state) => state.authSlice);
  const [attendance, setAttendance] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState(null);

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
          setAttendance(res.data);
        } else {
          setError("No attendance data found");
        }
      } catch (error) {
        setError("Failed to fetch attendance data");
      }
    };
    fetchAttendance();
  }, [user.id]);

  const getAttendanceStatus = (date) => {
    if (attendance.length === 0) return null;

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const record = attendance.find(
      (entry) =>
        entry.date === day && entry.month === month && entry.year === year
    );

    return record ? record.status : "";
  };

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

  const totals = calculateTotals();

  return (
    <div className="main-content">
      <style>
        {`
    /* Main Content Styling */
    .main-content {
      height: 100vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #121212; /* Dark background for main content */
      font-family: "Arial", sans-serif; /* Set a clean font */
      color: #e0e0e0; /* Light gray text for better readability */
    }

    /* Error Message Styling */
    .error-message {
      color: #ff6f61; /* Bright red for error messages */
      text-align: center;
      margin: 20px;
      font-size: 1.2em; /* Larger text for emphasis */
    }

    /* Calendar Container */
    .calendar-container {
      margin: 20px auto;
      max-width: 1200px;
      width: 90%; /* Responsive width */
    }

    /* Summary Box Styling */
    .summary-box {
      border: 1px solid #444; /* Dark border for summary box */
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1); /* Light shadow for summary box */
      text-align: center;
      background-color: #1e1e1e; /* Dark background for summary box */
    }

    /* Summary Items Layout */
    .summary-items {
      display: flex;
      justify-content: space-around;
      margin-top: 10px; /* Added margin for spacing */
    }

    /* Summary Item Styling */
    .summary-item {
      text-align: center;
      flex: 1; /* Equal spacing for items */
      padding: 10px; /* Padding for touch targets */
    }

    .summary-item p {
      margin: 0; /* Remove default margin */
      font-size: 1.1em; /* Increase font size for better readability */
    }

    /* Status Colors */
    .summary-item.present p {
      color: #4caf50; /* Green for present */
      font-weight: bold;
    }

    .summary-item.half-day p {
      color: #ffc107; /* Amber for half-day */
      font-weight: bold;
    }

    .summary-item.absent p {
      color: #f44336; /* Red for absent */
      font-weight: bold;
    }

    /* Custom Calendar Styling */
    .custom-calendar {
      width: 100%;
      height: 500px;
      border-radius: 10px; /* Rounded corners for calendar */
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2); /* Light shadow for calendar */
    }

    /* React Calendar Base */
    .react-calendar {
      background-color: #1e1e1e; /* Dark background for calendar */
      border: none; /* No border for the calendar */
    }

    /* Month View Padding */
    .react-calendar__month-view {
      padding: 10px;
    }

    /* Month Name Styling */
    .react-calendar__navigation__label {
      color: #ffffff; /* Set month name to white*/
      font-weight: bold; /* Make it bold for emphasis */
    }

    /* Month Navigation Button Styling */
    .react-calendar__navigation button {
      color: #ffffff; /* White color for navigation buttons */
      background: transparent; /* Transparent background */
      border: none; /* No border */
      cursor: pointer; /* Pointer cursor on hover */
      transition: color 0.3s ease; /* Smooth color transition */
    }

    .react-calendar__navigation button:hover {
      color: #ff6f61; /* Change color on hover */
    }

    /* Calendar Tile Styling */
    .react-calendar__tile {
      padding: 15px; /* More padding for the calendar tiles */
      border-radius: 8px; /* Rounded corners for tiles */
      transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for hover effect */
      box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1); /* Light shadow for tiles */
      color: #ffffff; /* White text for calendar tiles */
      font-size: 1em; /* Standardize font size */
    }

    /* Active Tile Highlighting */
    .react-calendar__tile--active {
      background-color: #42a5f5; /* Highlight active tile */
      color: white; /* White text for active tile */
    }

    /* Today's Date Highlighting */
    .react-calendar__tile--now {
      background-color: #00695c; /* Dark teal for today's date */
      color: white; /* Ensure text is visible */
    }

    /* Hover Effect for Calendar Tiles */
    .react-calendar__tile:hover {
      background-color: #ffffff; /* White background on hover */
      color: #121212; /* Dark text for visibility on hover */
    }

    /* Disabled Tiles */
    .react-calendar__tile--disabled {
      color: #bdbdbd; /* Grey for disabled tiles */
    }

    /* Additional Classes for Status */
    .present {
      color: #4caf50; /* Green for present */
    }

    .half-day {
      color: #ffc107; /* Amber for half-day */
    }

    .absent {
      color: #f44336; /* Red for absent */
    }

    /* Button Styling */
    .button {
      background-color: #42a5f5; /* Button color */
      color: white; /* Button text color */
      border: none; /* No border */
      padding: 10px 20px; /* Padding for the button */
      border-radius: 5px; /* Rounded corners for the button */
      cursor: pointer; /* Pointer cursor on hover */
      margin-top: 20px; /* Space above the button */
      transition: background-color 0.3s; /* Transition for hover effect */
    }

    .button:hover {
      background-color: #00796b;
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
      .summary-items {
        flex-direction: column; /* Stack items on smaller screens */
      }

      .summary-item {
        margin: 10px 0; /* Add margin between stacked items */
      }
    }
  `}
      </style>

      {error && <div className="error-message">{error}</div>}
      {attendance.length > 0 ? (
        <div className="calendar-container">
          <div className="summary-box">
            <h3>Monthly Attendance Summary</h3>
            <div className="summary-items">
              <div className="summary-item present">
                <p>Present: {totals.Present}</p>
              </div>
              <div className="summary-item half-day">
                <p>Half Day: {totals["Half Day"]}</p>
              </div>
              <div className="summary-item absent">
                <p>Absent: {totals.Absent}</p>
              </div>
            </div>
          </div>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            className="custom-calendar"
            tileContent={({ date, view }) => {
              if (view === "month") {
                const status = getAttendanceStatus(date);
                return (
                  <div className="calendar-tile">
                    <p
                      className={
                        status === "Present"
                          ? "present"
                          : status === "Half Day"
                          ? "half-day"
                          : status === "Absent"
                          ? "absent"
                          : ""
                      }
                    >
                      {status}
                    </p>
                  </div>
                );
              }
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
