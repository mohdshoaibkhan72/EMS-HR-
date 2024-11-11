import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Admin from "./Navigation/Admin";
import Leader from "./Navigation/Leader";
import Employee from "./Navigation/Employee";
import "./SideBar.css"; // Assuming CSS handles expanded/collapsed states

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Default to expanded
  const { user } = useSelector((state) => state.authSlice);

  // Function to render the correct menu based on user type
  const renderUserMenu = () => {
    if (!user) return null; // Handle loading or undefined user state
    switch (user.type) {
      case "Admin":
        return <Admin />;
      case "Leader":
        return <Leader />;
      case "Employee":
        return <Employee />;
      default:
        return null;
    }
  };

  return (
    <div className={`main-sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <aside id="sidebar-wrapper">
        {/* Sidebar Brand */}
        <div className="sidebar-brand sidebar-brand-sm">
          <NavLink to="/home">TM</NavLink>
        </div>
        {/* Toggle Button */}
        <li>
          <NavLink
            to="#"
            onClick={() => setIsExpanded(!isExpanded)}
            className="nav-link nav-link-lg"
            aria-label="Toggle sidebar"
          >
            <i className="fas fa-bars"></i>
          </NavLink>
        </li>
        {/* Sidebar Menu */}
        <div
          className={`sidebar-menu ${isExpanded ? "expanded" : "collapsed"}`}
        >
          {renderUserMenu()} {/* Render the corresponding menu */}
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
