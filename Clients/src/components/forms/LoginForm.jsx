import { useState } from "react";
import { NavLink } from "react-router-dom";
import { doLogin } from "../../http";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/auth-slice";
import { toast } from "react-toastify";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setFormData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) return toast.error("All Fields Required");
    const res = await doLogin({ email, password });
    const { success } = res;
    if (success) dispatch(setAuth(res.user));
  };

  return (
    <>
      {" "}
      <div className="navbarlogo">
        <img
          src="https://www.paisa4you.com/Images/png%20logo.png"
          alt="Company Logo"
          width="200"
        />
      </div>
      <div className="login-container">
        <div className="login-left">
          <div className="login-brand">
            <img
              src="https://www.paisa4you.com/Images/png%20logo.png"
              alt="Company Logo"
              width="200"
            />
          </div>
          <div className="login-card">
            <h4>Hello! there</h4>
            <form onSubmit={onSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  onChange={inputEvent}
                  value={formData.email}
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  onChange={inputEvent}
                  value={formData.password}
                  type="password"
                  className="form-control"
                  name="password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
              <NavLink to="/forgot" className="forgot-password">
                Forgot Password?
              </NavLink>
            </form>
          </div>
          <div className="login-footer">
            <span>Developed by Shoaib Khan</span>
            <div className="social-links">
              <a
                href="https://mohammad-shoaib-khan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: "25px" }}
                  src="https://pngimg.com/uploads/letter_s/letter_s_PNG34.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="login-right">
          <div className="login-content">
            <h1>Welcome Back!</h1>
            <p>Your gateway to Paisa4You's employee portal</p>
            <p className="highlight">
              Stay connected, manage tasks, and access company resources with
              ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
