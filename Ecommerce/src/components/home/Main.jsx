import "./main.css";
import Product from "./productcard";
import React, { Fragment, useEffect } from "react";
import { getProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/loader";

const Main = () => {
  const dispatch = useDispatch();
  const { loading, error, product, productCount } = useSelector(
    (state) => state.products
  );
  console.log("Connected to Main");

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getProducts());
    };
    fetchData();
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="main-section">
            <div className="main-container">
              <div className="featured-product ">Featured Products</div>
            </div>
            <div className="cat-product">
              <p>SmartPhone</p>
              <div className="catwise-product">
                <div className="container-product" id="container">
                  {product &&
                    product.map((product) => (
                      <Product key={product._id} product={product} />
                    ))}
                </div>
              </div>
            </div>
            <div className="container-product" id="container">
              <h2>ade</h2>
              {product &&
                product.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Main;
