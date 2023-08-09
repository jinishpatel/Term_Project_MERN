import React, { Fragment, useState, useEffect } from "react";
import "./updateprofile.css";
import { useSelector, useDispatch } from "react-redux";
import {loaduser, updateProfile, clearErrors } from "../../actions/userAction";
import Loader from "../loader/loader";
import { Link, useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import LockOpenIcon from "@mui/icons-material/Lock";
import FaceIcon from "@mui/icons-material/Face";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { CLEAR_ERRORS, UPDATE_PROFILE_RESET } from "../../constants/userConstants";

const Update_Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);
  // const [avatar, setAvatar] = useState("");

  // const [avatarPreview, setAvatarPreview] = useState("/avatar.png");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email",email);
    // myForm.set("password", password);
    // myForm.set("avatar", user.avatar);
    console.log("myform", myForm);
    dispatch(updateProfile(myForm));
  };

  // const updateProfileDataChange = (e) => {
  //   const reader = new FileReader();
  //   // reader.onload = () => {
  //   //   if (reader.readyState === 2) {
  //   //     setAvatarPreview(reader.result);
  //   //     setAvatar(reader.result);
  //   //   }
  //   // };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  // const [openAlert, setOpenAlert] = useState(false);
  // const handleCloseAlert = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpenAlert(false);
  // };
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      // setAvatarPreview(user.avatar.url);
    }
    if (error) {
      // setOpenAlert(true);
      dispatch(clearErrors());
    }
    console.log("isUpdated", isUpdated);
    if (isUpdated) {
      const fetchData = async () => {
        dispatch(loaduser());
        navigate("/me");
        dispatch({ type: UPDATE_PROFILE_RESET });
      };
      fetchData();
    }
  }, [dispatch, error, isUpdated, user,navigate]);

  return (
    <Fragment>
    {
      loading ? <Loader /> :(<Fragment>
        
      <div className="updateProfileContainer">
        <div className="updateProfileBox">
          <h2 className="main-h2">Update Profile</h2>
          <div>
            <form
              className="updateProfileForm"
              encType="multipart/form-data"
              onSubmit={updateProfileSubmit}
            >
              <div className="updateProfileName">
                <FaceIcon />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="updateProfileEmail">
                <MailIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              {/* <div id="updateProfileImage">
              <img src={avatarPreview} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProfileDataChange}
              />
            </div> */}
              <input
                type="submit"
                value="updateProfile"
                className="updateProfileBtn"
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>)
    }
    </Fragment>
  );
};

export default Update_Profile;
