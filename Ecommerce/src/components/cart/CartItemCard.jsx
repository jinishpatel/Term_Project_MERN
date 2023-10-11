/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './cartItemCard.css';

const CartItemCard = ({ item, deleteCartItems }) => {
	return (
		<div className="CartItemCard">
			<img src={item.image} alt="adfadf"></img>
			<div>
				<Link to={`/product/${item.product}`}>{item.name}</Link>
				<span>{`price:${item.price}`}</span>
				<p onClick={() => deleteCartItems(item.product)}>Remove</p>
			</div>
			<div>test</div>
		</div>
	);
};
export default CartItemCard;
