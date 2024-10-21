import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import "./Employee.css"; // Import the CSS file for custom styles

const Employee = () => {
  const { user, loading } = useSelector((state) => state.authSlice);
  const [activeSection, setActiveSection] = useState("basic");

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return <div className="error">Error loading user details.</div>;
  }

  return (
    <>
      <div className="employee-dashboard">
        <section className="dashboard-section">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <FaUserCircle className="profile-icon" />
              <h4>Welcome, {user?.name}</h4>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="section-buttons">
            <button
              className={`section-btn ${
                activeSection === "basic" ? "active" : ""
              }`}
              onClick={() => setActiveSection("basic")}
            >
              Basic Details
            </button>
            <button
              className={`section-btn ${
                activeSection === "office" ? "active" : ""
              }`}
              onClick={() => setActiveSection("office")}
            >
              Office Details
            </button>
            <button
              className={`section-btn ${
                activeSection === "bank" ? "active" : ""
              }`}
              onClick={() => setActiveSection("bank")}
            >
              Bank Details
            </button>
          </div>

          {/* Details Section */}
          <div className="details-card">
            {activeSection === "basic" && (
              <div className="details-section">
                <h4>Profile Details</h4>
                <div className="details-grid">
                  <div className="details-item">
                    <strong>Name:</strong> {user.name}
                  </div>
                  <div className="details-item">
                    <strong>DOB:</strong> {user.dob.slice(0, 10)}
                  </div>

                  <div className="details-item">
                    <strong>Gender:</strong> {user.gender}
                  </div>
                  <div className="details-item">
                    <strong>Address:</strong> {user.address}
                  </div>
                </div>
              </div>
            )}

            {activeSection === "office" && (
              <div className="details-section">
                <h4>Office Details</h4>
                <div className="details-grid">
                  <div className="details-item">
                    <strong>Username:</strong> {user.username}
                  </div>
                  <div className="details-item">
                    <strong>Email:</strong> {user.email}
                  </div>
                  <div className="details-item">
                    <strong>User Type:</strong> {user.type}
                  </div>
                  <div className="details-item">
                    <strong>Status:</strong> {user.status}
                  </div>
                  <div className="details-item">
                    <strong>Mobile:</strong> {user.mobile}
                  </div>
                  <div className="details-item">
                    <strong>Emp ID:</strong> {user.empID}
                  </div>
                  <div className="details-item">
                    <strong>Joining Date:</strong> {user.joiningDate}
                  </div>
                </div>
              </div>
            )}

            {activeSection === "bank" && (
              <div className="details-section">
                <h4>Bank Details</h4>
                <div className="details-grid">
                  <div className="details-item">
                    <strong>Account Number:</strong> {user.accountNumber}
                  </div>
                  <div className="details-item">
                    <strong>Bank Name:</strong> {user.bankName}
                  </div>
                  <div className="details-item">
                    <strong>IFSC:</strong> {user.IFSC}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      {/* Extra Section with Recent Activities or Announcements */}
      <div className="extra-section">
        <h4>Recent Activity loading......</h4>
        <ul className="activity-list">
          <li>Completed Task A</li>
          <li>Updated Bank Details</li>
          <li>Requested for Leave</li>
        </ul>
      </div>
    </>
  );
};

export default Employee;
