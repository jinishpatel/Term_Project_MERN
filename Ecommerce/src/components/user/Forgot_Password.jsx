import React, { Fragment, useState, useEffect } from "react";
import {loaduser,  clearErrors, forgotPassword } from "../../actions/userAction";
import Loader from "../loader/loader";
import "./Forgot_Password.css";
import { Link, useNavigate } from "react-router-dom";
import { CLEAR_ERRORS, UPDATE_PASSWORD_SUCCESS, UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import { useSelector, useDispatch } from "react-redux";
import MailIcon from "@mui/icons-material/Mail";


export default function Forgot_Password() {
    const dispatch = useDispatch();
    const {error,message, loading} = useSelector(state => state.forgotPassword)

    const [email, setEmail] = useState("");

    const forgotPasswordSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email", email);
  
        console.log("myform", myForm);
        dispatch(forgotPassword(myForm));
      };


    useEffect(() => {
        if(error){
            dispatch(clearErrors())
        }
        if(message){
            alert.success(message)
        }

    },[dispatch,error,message,alert])
    return (
    <Fragment>
      {
        loading ? <Loader /> :(<Fragment>
          
        <div className="forgotPasswordContainer">
          <div className="forgotPasswordBox">
            <h2 className="main-h2">Forgot Password</h2>
            <div>
              <form
                className="forgotPasswordForm"
                encType="multipart/form-data"
                onSubmit={ forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
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
                <input
                  type="submit"
                  value="send"
                  className="forgotPasswordBtn"
                />
              </form>
            </div>
          </div>
        </div>
      </Fragment>)
      }
      </Fragment>
    );

}
