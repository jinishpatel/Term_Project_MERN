import React from "react";
import "./userProfile.css";
import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../loader/loader";

const UserProfile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    // Corrected the name to useEffect
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h1 className="main-h1"> MY Profile</h1>
          <div className="profilecontainer">
            <div className="first-div">
              <img
                src="https://res.cloudinary.com/dg4btcufa/image/upload/v1691384481/avatars/avtar_fc2tfh.png"
                alt={user.name}
              />
              <Link to="../me/update" className="edit-profile-link">
                Edit Profile
              </Link>
            </div>
            <div className="second-div">
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email Address</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substring(0, 10)}</p>
              </div>
              <div className="link-contain">
                <Link to="/orders/me" className="link-for-profile">
                  My Orders
                </Link>
                <Link to="/password/update" className="link-for-profile">
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
export default UserProfile;
