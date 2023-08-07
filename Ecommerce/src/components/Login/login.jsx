import { Fragment, useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterTheme = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
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
      const res = await axios.post(`http://localhost:4000/api/v1/login`, {
        ...user,
      });
      res.status === 200 && navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <div className="registerContainer">
        <div className="register-card">
          <div className="card-header">
            <div className="log">Login</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="left">
              <h1>Login</h1>

              <label htmlFor="">Email*</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <label htmlFor="">Password*</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Enter your Password"
                required
              />
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterTheme;
