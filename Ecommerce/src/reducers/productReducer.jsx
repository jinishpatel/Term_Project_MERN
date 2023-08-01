import {
  ALL_PRODUCT_ERROR,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";
const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST: {
      return { loading: true, products: [] };
    }
    case ALL_PRODUCT_SUCCESS: {
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
      };
    }
    case ALL_PRODUCT_ERROR: {
      return { loading: false, error: action.payload };
    }
    case CLEAR_ERRORS: {
      return { ...state, error: null };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
