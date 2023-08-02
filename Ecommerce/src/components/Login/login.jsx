import React, { Fragment } from "react";
import "./login.css";

const LoginTheme = () => {
  return (
    <Fragment>
      <div className="LoginContainer">
        <div className="login-card">
          <div className="card-header">
            <div className="log">Login</div>
          </div>
          <form>
            <div className="form-group">
              <label>Username:</label>
              <input required="" name="username" id="username" type="text" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                required=""
                name="password"
                id="password"
                type="password"
              />
            </div>
            <div className="form-group">
              <input value="Login" type="submit" />
            </div>
            <div>
              <p className="acoount-signUp">
                Don't Have Acoount With Us?<a href="/register">REGISTER NOW</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginTheme;
