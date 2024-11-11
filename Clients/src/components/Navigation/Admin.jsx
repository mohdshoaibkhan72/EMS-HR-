import { useState } from "react";
import { NavLink } from "react-router-dom";

const Admin = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          .nav-link {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            color: #aab2bd;
            text-decoration: none;
            font-size: 16px;
            transition: background-color 0.3s, color 0.3s;
          }

          /* Style for the hover effect */
          .nav-link:hover {
            background-color: transparent;
            color: #aab2bd;
          }

          .nav-link i {
            margin-right: 10px;
            font-size: 18px;
          }

          .menu-header {
            padding: 15px 20px;
            font-weight: bold;
            color: #dcdcdc;
            font-size: 14px;
            text-transform: uppercase;
          }

          .nav-link.logout {
            color: #e74c3c;
          }

          .nav-link.logout:hover {
            background-color: #c0392b;
            color: #fff;
          }

          /* Style for dropdowns */
          .submenu {
            list-style: none;
            padding-left: 20px;
            margin: 0;
            max-height: 0; /* Initially collapse the submenu */
            opacity: 0;
            overflow: hidden;
            transition: max-height 0.5s ease, opacity 0.5s ease;
          }

          .submenu.show {
            max-height: 500px; /* Ensure this is enough to accommodate your content */
            opacity: 1;
          }

          /* Style for div acting like nav-link */
          .nav-link-trigger {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            color: #aab2bd;
            text-decoration: none;
            font-size: 16px;
            cursor: pointer; /* Make it behave like a clickable link */
            transition: background-color 0.3s, color 0.3s;
          }

          .nav-link-trigger:hover {
            background-color: transparent;
            color: #aab2bd;
          }

          .nav-link-trigger i {
            margin-right: 10px;
            font-size: 18px;
          }
        `}
      </style>

      <ul className="sidebar-menu">
        <li>
          <NavLink className="nav-link" to="/home">
            <i className="fas fa-home"></i> <span>Dashboard</span>
          </NavLink>
        </li>

        {/* Employees Section */}
        <li>
          <div
            onClick={() => toggleDropdown("employees")}
            className="nav-link-trigger"
          >
            <i className="fas fa-users"></i> <span>Employees </span>
          </div>
          <ul
            className={`submenu ${
              activeDropdown === "employees" ? "show" : ""
            }`}
          >
            <li>
              <NavLink className="nav-link" to="/adduser">
                <i className="fas fa-user-plus"></i> <span>Add Employee</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/employees">
                <i className="fas fa-eye"></i> <span>View Employee</span>
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Attendance Section */}
        <li>
          <div
            onClick={() => toggleDropdown("attendance")}
            className="nav-link-trigger"
          >
            <i className="fas fa-user"></i> <span>Attendance</span>
          </div>
          <ul
            className={`submenu ${
              activeDropdown === "attendance" ? "show" : ""
            }`}
          >
            <li>
              <NavLink className="nav-link" to="/markAttendance">
                <i className="fas fa-check-circle"></i>{" "}
                <span>Mark Attendance</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/attendance">
                <i className="fas fa-eye"></i> <span>View Attendance</span>
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Salary Section */}
        <li>
          <div
            onClick={() => toggleDropdown("salary")}
            className="nav-link-trigger"
          >
            <i className="fas fa-piggy-bank"></i> <span>Salary</span>
          </div>
          <ul
            className={`submenu ${activeDropdown === "salary" ? "show" : ""}`}
          >
            <li>
              <NavLink className="nav-link" to="/assignSalary">
                <i className="fas fa-pen"></i> <span>Assign Salary</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/salaries">
                <i className="fas fa-dollar-sign"></i> <span>Salaries</span>
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Other Sections */}
        <li>
          <NavLink className="nav-link" to="/leaders">
            <i className="fas fa-user-friends"></i> <span>Leaders</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/admins">
            <i className="fas fa-users-cog"></i> <span>Admins</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/teams">
            <i className="fas fa-fire"></i> <span>Teams</span>
          </NavLink>
        </li>

        {/* Settings Section */}
        <li className="menu-header">Settings</li>
        <li>
          <NavLink className="nav-link" to="/contact">
            <i className="fab fa-teamspeak"></i> <span>Contact Us</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">
            <i className="fas fa-info-circle"></i> <span>About Us</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link logout" to="/home">
            <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Admin;
