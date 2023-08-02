import React, { Fragment, useEffect } from "react";

import "./productDetails.css";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";

const ProductDetails = (match) => {
  const dispatch = useDispatch();

    const { product } = useSelector((state) => state.productDetails);
    console.log("product" + product);
    useEffect(
      (match) => {
        dispatch(getProductDetails(match.params.id));
      },
      [dispatch, match.params.id]
    );
    return (
      <Fragment>
        <div className="productDetails"></div>
        <Carousel>
          {product.images &&
            product.images.map((item, i) => (
              <img
                className="carsoulImg"
                key={item.url}
                src={item.url}
                alt={`${i} Slide`}
              />
            ))}
        </Carousel>
      </Fragment>
    );
  
};
export default ProductDetails;
