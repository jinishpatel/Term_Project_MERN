import { Fragment, useEffect, useState } from "react";

import "./productDetails.css";
import Carousel from "react-material-ui-carousel";
import { getProductDetails } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams }  from "react-router-dom";
import { addItemsToCart } from "../../actions/cartAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product } = useSelector((state) => state.productDetails);
  console.log(product);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const [quantity,setQuantity]=useState(1);

  const increaseQuantity=()=>{
    const qty=quantity+1;
    if(product.stock>=qty){
      setQuantity(qty);
    }
  }
  const descreseQuentity=()=>{
    const qty=quantity-1;
    if(qty<1){
      setQuantity(1);
    }else{
      setQuantity(qty);
    }
  }
  const addToCartHandler=()=>{
    dispatch(addItemsToCart(id,quantity)),
    console.log('Product Added to Cart')
  }
  
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
              <button className="Minus" onClick={descreseQuentity}>-</button>
                <input readOnly value={quantity} type="number" />
                <button className="plus" onClick={increaseQuantity}>+</button>
              </div>
              <div className="detailblock_3_1_2">
                <h3>${product.price}</h3>
              </div>
              <button className="addtocart" onClick={addToCartHandler}>Add to Cart</button>
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
