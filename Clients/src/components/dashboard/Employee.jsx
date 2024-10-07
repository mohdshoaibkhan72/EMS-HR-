import React, { useState } from "react";
import { useSelector } from "react-redux";

const Employee = () => {
  const { user, loading } = useSelector((state) => state.authSlice);
  const [activeSection, setActiveSection] = useState("basic");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Error loading user details.</div>;
  }

  console.log("user details are ", user);

  return (
    <div className="container mt-5">
      <section className="section">
        {/* Welcome Card */}
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between">
            <h4>Welcome {user?.name}</h4>
          </div>
        </div>

        {/* Button Group for Sections */}
        <div className="btn-group mb-4" role="group" aria-label="Basic details">
          <button
            type="button"
            className={`btn ${
              activeSection === "basic" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setActiveSection("basic")}
          >
            Basic Details
          </button>
          <button
            type="button"
            className={`btn ${
              activeSection === "office" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setActiveSection("office")}
          >
            Office Details
          </button>
          <button
            type="button"
            className={`btn ${
              activeSection === "bank" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setActiveSection("bank")}
          >
            Bank Details
          </button>
        </div>

        {/* Profile Card */}
        <div className="card mb-4">
          <div className="card-body row">
            <div className="col-md-3">
              <img
                className="img-fluid img-thumbnail"
                src={user.image}
                alt={`${user.name}'s profile`}
              />
            </div>
            <div className="col-md-9">
              {activeSection === "basic" && (
                <>
                  <h4 className="mb-3">Profile Details</h4>
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <strong>Name:</strong> {user.name}
                      </p>
                      <p>
                        <strong>DOB:</strong> {user.dob}
                      </p>
                      <p>
                        <strong>Gender:</strong> {user.gender}
                      </p>
                      <p>
                        <strong>Address:</strong> {user.address}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {activeSection === "office" && (
                <>
                  <h4 className="mb-3">Office Details</h4>
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <strong>Username:</strong> {user.username}
                      </p>
                      <p>
                        <strong>Email:</strong> {user.email}
                      </p>
                      <p>
                        <strong>User Type:</strong> {user.type}
                      </p>
                      <p>
                        <strong>Status:</strong> {user.status}
                      </p>
                      <p>
                        <strong>Mobile:</strong> {user.mobile}
                      </p>
                      <p>
                        <strong>Emp ID:</strong> {user.empID}
                      </p>
                      <p>
                        <strong>Joining Date:</strong> {user.joiningDate}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {activeSection === "bank" && (
                <>
                  <h4 className="mb-3">Bank Details</h4>
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <strong>Account Number:</strong> {user.accountNumber}
                      </p>
                      <p>
                        <strong>Bank Name:</strong> {user.bankName}
                      </p>
                      <p>
                        <strong>IFSC:</strong> {user.IFSC}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employee;
