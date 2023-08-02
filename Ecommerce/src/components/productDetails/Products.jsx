import React, { Fragment, useEffect } from "react";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loader/loader";
import ProductCard from "../home/product";
import { getProducts } from "../../actions/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, product, productCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => dispatch(getProducts()), [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="Products-main">
            <h2>Products</h2>
            <div className="products">
              {product &&
                product.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
