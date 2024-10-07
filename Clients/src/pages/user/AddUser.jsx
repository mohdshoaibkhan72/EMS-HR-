import { useState } from "react";
import { toast } from "react-toastify";
import HeaderSection from "../../components/HeaderSection";
import { addUser } from "../../http"; // Make sure this function handles the API request correctly
import Modal from "../../components/modal/Modal";

const AddUser = () => {
  const [imagePreview, setImagePreview] = useState("/assets/icons/user.png");
  const initialState = {
    empID: "", // Add empID here
    name: "",
    email: "",
    mobile: "",
    password: "",
    type: "Employee",
    address: "",
    profile: "",
    accountNumber: "",
    bankName: "",
    IFSC: "",
    adminPassword: "",
    dob: "", // Date of Birth
    joiningDate: "", // Joining Date
    gender: "", // Gender
  };
  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setFormData((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const {
      empID, // Include empID in the destructured formData
      name,
      email,
      mobile,
      password,
      type,
      address,
      profile,
      accountNumber,
      bankName,
      IFSC,
      dob,
      joiningDate,
      gender,
    } = formData;

    // Validate required fields
    if (
      !empID || // Check for empID
      !name ||
      !email ||
      !mobile ||
      !password ||
      !type ||
      !address ||
      !accountNumber ||
      !bankName ||
      !IFSC ||
      !dob ||
      !joiningDate ||
      !gender
    ) {
      return toast.error("All fields are required");
    }
    if (!profile) {
      return toast.error("Please choose an image");
    }
    if (type === "Admin" && !showModal) {
      setShowModal(true);
      return;
    }

    const fd = new FormData();
    Object.keys(formData).forEach((key) => {
      fd.append(key, formData[key]);
    });

    const { success, message } = await addUser(fd);
    if (success) {
      toast.success(message);
      setShowModal(false);
      setFormData({ ...initialState });
      setImagePreview("/assets/icons/user.png");
    } else {
      toast.error(message || "Failed to add user");
    }
  };

  const captureImage = (e) => {
    const file = e.target.files[0];
    setFormData((old) => ({
      ...old,
      profile: file,
    }));
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  const modalAction = () => setShowModal((prev) => !prev);

  const inputGroupStyle = {
    marginBottom: "15px",
  };

  const buttonStyle = {
    width: "200px",
  };

  return (
    <>
      {showModal && (
        <Modal close={modalAction} title="Add Admin" width="35%">
          <div className="row" style={{ margin: "20px" }}>
            <div className="col col-md-4">
              <div className="input-group justify-content-center text-center">
                <img
                  className="rounded"
                  src={imagePreview}
                  width="120"
                  alt=""
                />
              </div>
            </div>

            <div className="col col-md-8">
              <table className="table table-md">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{formData.name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{formData.email}</td>
                  </tr>
                  <tr>
                    <th>User Type</th>
                    <td>{formData.type}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="form-group col-md-12">
            <label>Enter Your Password</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
              <input
                onChange={inputEvent}
                value={formData.adminPassword}
                type="password"
                placeholder={`Enter Your Password To Add ${formData.name} As An Admin`}
                id="adminPassword"
                name="adminPassword"
                className="form-control"
              />
            </div>
          </div>
          <div className="justify-content-center text-center mb-3">
            <button
              className="btn btn-primary btn-lg"
              type="submit"
              form="addUserForm"
              style={{ width: "30vh" }}
            >
              Add {formData.type}
            </button>
          </div>
        </Modal>
      )}

      <div className="main-content">
        <section className="section">
          <HeaderSection title="Add User" />
          <div className="card">
            <div className="card-body pr-5 pl-5 m-1">
              <h4>Basic Details</h4>
              <form className="row" onSubmit={onSubmit} id="addUserForm">
                <div className="form-group col-md-12 text-center">
                  <div className="input-group justify-content-center">
                    <input
                      type="file"
                      id="profile"
                      name="profile"
                      className="form-control d-none"
                      onChange={captureImage}
                      accept="image/*"
                    />
                    <label htmlFor="profile">
                      <img
                        className="rounded"
                        src={imagePreview}
                        width="120"
                        alt=""
                      />
                    </label>
                  </div>
                </div>

                <div className="form-group col-md-6" style={inputGroupStyle}>
                  <label>Enter Name</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-user"></i>
                      </div>
                    </div>
                    <input
                      onChange={inputEvent}
                      value={formData.name}
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group col-md-6" style={inputGroupStyle}>
                  <label>Enter Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                      </div>
                    </div>
                    <input
                      onChange={inputEvent}
                      value={formData.email}
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group col-md-4" style={inputGroupStyle}>
                  <label>Enter Mobile Number</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-phone"></i>
                      </div>
                    </div>
                    <input
                      onChange={inputEvent}
                      value={formData.mobile}
                      type="number"
                      id="mobile"
                      name="mobile"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group col-md-4" style={inputGroupStyle}>
                  <label>Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={inputEvent}
                    className="form-control"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group col-md-4" style={inputGroupStyle}>
                  <label>Date of Birth</label>
                  <input
                    onChange={inputEvent}
                    value={formData.dob}
                    type="date"
                    id="dob"
                    name="dob"
                    className="form-control"
                  />
                </div>

                <div className="form-group col-md-12" style={inputGroupStyle}>
                  <label>Address</label>
                  <textarea
                    onChange={inputEvent}
                    value={formData.address}
                    id="address"
                    name="address"
                    className="form-control"
                    rows="3"
                  />
                </div>
                <h4>office details</h4>

                <div className="form-group col-md-6" style={inputGroupStyle}>
                  <label>Employee ID</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-id-card"></i>
                      </div>
                    </div>
                    <input
                      onChange={inputEvent}
                      value={formData.empID}
                      type="text"
                      id="empID"
                      name="empID"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group col-md-4" style={inputGroupStyle}>
                  <label>Enter Password</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-lock"></i>
                      </div>
                    </div>
                    <input
                      onChange={inputEvent}
                      value={formData.password}
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group col-md-4" style={inputGroupStyle}>
                  <label>User Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={inputEvent}
                    className="form-control"
                  >
                    <option value="">SelectUser</option>
                    <option value="Employee">Employee</option>

                    <option value="Admin">Admin</option>
                    <option value="leader">leader</option>
                  </select>
                </div>
                <div className="form-group col-md-4" style={inputGroupStyle}>
                  <label>Joining Date</label>
                  <input
                    onChange={inputEvent}
                    value={formData.joiningDate}
                    type="date"
                    id="joiningDate"
                    name="joiningDate"
                    className="form-control"
                  />
                </div>
                <h4>basic details</h4>
                <div className="form-group col-md-6" style={inputGroupStyle}>
                  <label>Account Number</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-university"></i>
                      </div>
                    </div>
                    <input
                      onChange={inputEvent}
                      value={formData.accountNumber}
                      type="text"
                      id="accountNumber"
                      name="accountNumber"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group col-md-6" style={inputGroupStyle}>
                  <label>Bank Name</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-university"></i>
                      </div>
                    </div>
                    <input
                      onChange={inputEvent}
                      value={formData.bankName}
                      type="text"
                      id="bankName"
                      name="bankName"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group col-md-6" style={inputGroupStyle}>
                  <label>IFSC Code</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-university"></i>
                      </div>
                    </div>
                    <input
                      onChange={inputEvent}
                      value={formData.IFSC}
                      type="text"
                      id="IFSC"
                      name="IFSC"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-12 text-center">
                  <button
                    className="btn btn-success"
                    type="submit"
                    style={buttonStyle}
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddUser;
