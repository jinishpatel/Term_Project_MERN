import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      config
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.response.data.message });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    console.log(formData);

    const { data } = await axios.post("/api/v1/register", formData, config);
    console.log(data);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loaduser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get("/api/v1/me");
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};


export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message,
      message: "Logout Fail",
    });
  }
};

// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put("/api/v1/me/update", userData, config);
    console.log(data);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put("/api/v1/password/update", passwords, config);
    console.log(data);
    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

//forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/password/forgot",
    email,
      config
    );
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type : FORGOT_PASSWORD_FAIL, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
    message: "Clear Errors",
  });
};
