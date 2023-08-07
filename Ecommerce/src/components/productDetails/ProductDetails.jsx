import { Fragment, useEffect } from "react";

import "./productDetails.css";
import Carousel from "react-material-ui-carousel";
import { getProductDetails } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams }  from "react-router-dom";

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
      <div className="productDetails">
        <div className="productDetails_left">
          <Carousel className="imagedisp">
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
        </div>
        <div className="productDetails_right">
          <div className="detailblock_1">
            <h2>{product.name}</h2>
          </div>
          <div className="detailblock_2">
            <span>({product.numOfReviews}Reviews)</span>
          </div>
          <div className="detailblock_3">
            <div className="detailblock_3_1">
              <div className="detailblock_3_1_1">
                <button>-</button>
                <input value="1" type="number" />
                <button>+</button>
              </div>
              <div className="detailblock_3_1_2">
                <h3>${product.price}</h3>
              </div>
              <button>Add to Cart</button>
            </div>

            <p>
              Status:
              <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                {product.stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
          </div>

          <div className="">
            <h3>Discription:</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductDetails;
