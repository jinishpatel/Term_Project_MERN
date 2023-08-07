import React, { Fragment, useState, useEffect } from "react";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loader/loader";
import ProductCard from "../home/productcard";
import { getProducts } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Pagination from "react-js-pagination";

const categories = ["Laptop", "Accessories", "Camera", "Smartphone", "Watch"];

const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  // console.log("Connected to keyword" + keyword);
  const {
    loading,
    error,
    product,
    productCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const [price, setPrice] = useState([0, 2500]);
  const priceHandler = (e, newprice) => {
    setPrice(newprice);
    // console.log(newprice);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  useEffect(() => {
    if (error) {
      return alert.error(error);
      dispatch(clearErrors());
    }
    const fetchData = async () => {
      await dispatch(getProducts(keyword, currentPage, price, category));
    };
    fetchData();
  }, [dispatch, keyword, currentPage, price, category]);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  // console.log("filterproduct", filteredProductsCount);
  // console.log("asdaasdda", resultPerPage);
  // console.log("asdaasdda", productCount);
  // let count = filteredProductsCount;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="Products-main">
            <h2 className="productheading">Products</h2>
            <div className="products">
              {product &&
                product.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
          <div className="filter-box">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={2500}
            />
            <Typography>Category</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {resultPerPage < productCount && (
            <div className="paginationbox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                PrevPageText="Prev"
                NextPageText="Next"
                firstPageText="first"
                lastPageText="last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
