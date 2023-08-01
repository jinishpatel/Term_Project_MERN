import "./main.css";
import Product from "./product";
import React, { useEffect } from "react";
import { getProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const product = {
  name: "Nike Air Max 270",
  price: "120",
  _id: "Shoes",
  ratings: 4.5,
};

const Main = () => {
  const dispatch = useDispatch();
  console.log("Connected to Main");
  useEffect(() => dispatch(getProducts()), [dispatch]);

  return (
    <div className="main-section">
      <div className="main-container">
        <div className="featured-product ">Featured Products</div>
      </div>
      <div className="container" id="container"></div>
    </div>
  );
};

export default Main;
