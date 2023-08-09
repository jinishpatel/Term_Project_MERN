/** @format */

import './main.css';
import Product from './productcard';
import React, { Fragment, useEffect } from 'react';
import { getProducts } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/loader';

const Main = () => {
	const dispatch = useDispatch();
	const { loading, error, product, productCount } = useSelector(
		(state) => state.products,
	);
	console.log('Connected to Main');
	const groupedProducts = {};
	product.forEach((product) => {
		if (!groupedProducts[product.category]) {
			groupedProducts[product.category] = [];
		}
		if (groupedProducts[product.category].length < 4) {
			groupedProducts[product.category].push(product);
		}
	});

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
						{Object.keys(groupedProducts).map((category) => (
							<div className="cat-product" key={category}>
								<p>{category}</p>
								<div className="catwise-product">
									<div className="container-product" id="container">
										{groupedProducts[category].map((product) => (
											<Product key={product._id} product={product} />
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Main;
