import axios from "axios";

import {
  ALL_PRODUCT_ERROR,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
  console.log("Connected to getProduct");
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v1/product");
    console.log(data);
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
