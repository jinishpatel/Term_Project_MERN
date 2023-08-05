import { Fragment, useEffect } from "react";

import "./productDetails.css";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product } = useSelector((state) => state.productDetails);
  console.log(product);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

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
