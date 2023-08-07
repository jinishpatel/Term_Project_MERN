import { Fragment, useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterTheme = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/registeruser`,
        {
          ...user,
          withCredentials: true,
        }
      );
      res.status === 200 && navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <div className="registerContainer">
        <div className="register-card">
          <div className="card-header">
            <div className="log">Register</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="left">
              <h1>Create a new account</h1>
              <label htmlFor="">Username*</label>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="Enter your username"
              />
              <label htmlFor="">Email*</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <label htmlFor="">Password*</label>
              <input onChange={handleChange} type="password" name="password" />
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterTheme;
