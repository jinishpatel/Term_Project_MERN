import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";


export const login = (email, password) => async (dispatch) =>
{ 
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