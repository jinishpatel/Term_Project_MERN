import React, { Fragment } from "react";
import "./register.css";
const registerTheme = () => {
  return (
    <Fragment>
      <div className="registerContainer">
        <div className="register-card">
          <div className="card-header">
            <div className="log">Register</div>
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
              <label>Confirm Password:</label>
              <input
                required=""
                name="password"
                id="password"
                type="password"
              />
            </div>
            <div className="form-group">
              <label>Profile Picture:</label>
              <input type="file" accept="image/png, image/gif, image/jpeg" />
            </div>
            <div className="form-group">
              <input value="Register" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default registerTheme;
