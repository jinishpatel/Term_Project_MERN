import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import { useSelector, useDispatch } from "react-redux";
import { login, clearErrors, register } from "../../actions/userAction";
import Loader from "../loader/loader";
import { Link, useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import LockOpenIcon from "@mui/icons-material/Lock";
import FaceIcon from "@mui/icons-material/Face";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const LoginSignUp = (history) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("");

  const [avatarPreview, setAvatarPreview] = useState("/avatar.png");

  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(login(loginEmail, loginPassword));
  };
  console.log(loginEmail);

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    // myForm.set("avatar", user.avatar);
    console.log("myform", myForm);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      console.log(e.target.name, e.target.value);
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const [openAlert, setOpenAlert] = useState(false);
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const redirect = location.search ? location.search.split("=")[1] : "/me";
  useEffect(() => {
    if (error) {
      setOpenAlert(true);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      const fetchData = async () => {
        await localStorage.setItem(
          "user",
          JSON.stringify({ username: loginEmail })
        );
        navigate(redirect);
      };
      fetchData();
    }
  }, [dispatch, error, isAuthenticated, history,redirect]);

  const switchTabs = (e, tab) => {
    e.preventDefault();
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <Fragment>
      {showLoader ? (
        <Loader />
      ) : (
        <Fragment>
          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
          >
            <MuiAlert
              onClose={handleCloseAlert}
              severity="error"
              sx={{ width: "100%" }}
            >
              <strong>Error:Invalid Email or Password</strong> {error}
            </MuiAlert>
          </Snackbar>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MailIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <MailIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

                <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignUp;
