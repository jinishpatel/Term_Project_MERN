import axios from "axios";

import {
  ALL_PRODUCTS_ERROR,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
  console.log("Connected to getProduct");
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    const { data } = await axios.get("/api/v1/product");
    console.log(data);
    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong";
    dispatch({
      type: ALL_PRODUCTS_ERROR,
      payload: errorMessage,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
