import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Admin from "./Navigation/Admin";
import Leader from "./Navigation/Leader";
import Employee from "./Navigation/Employee";
import "./SideBar.css"; // Import the CSS file

const SideBar = () => {
  const { user } = useSelector((state) => state.authSlice);

  return (
    <div className="main-sidebar">
      <div className="navbarlogo">
        <img
          src="https://www.paisa4you.com/Images/png%20logo.png"
          alt="Company Logo"
          width="300"
        />
      </div>
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand sidebar-brand-sm">
          <NavLink to="/home">TM</NavLink>
        </div>
        <div className="sidebar-menu">
          {user.type === "Admin" ? (
            <Admin />
          ) : user.type === "Leader" ? (
            <Leader />
          ) : (
            <Employee />
          )}
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
