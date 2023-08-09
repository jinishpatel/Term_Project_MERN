/** @format */

import { React, Fragment } from 'react';
import './confirmorder.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CheckOutSteps from './CheckOutSteps';
import { Typography } from '@mui/material';

const Confirm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.user);
	console.log('user', user);
	const { shippingInfo, cartItems } = useSelector((state) => state.cart);
	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0,
	);
	const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;

	const shippingCharges = subtotal > 200 ? 0 : 10;
	const tax = 0.05 * subtotal;
	const totalPrice = subtotal + shippingCharges + tax;

	const proceedToPayment = () => {
		const data = {
			subtotal,
			shippingCharges,
			tax,
			totalPrice,
		};

		sessionStorage.setItem('orderInfo', JSON.stringify(data));

		navigate('/process/payment');
	};
	return (
		<Fragment>
			<div className="order-container">
				<CheckOutSteps activeStep={1} />
				<div className="confirmOrderPage">
					<div>
						<div className="confirmshippingArea">
							<Typography>Shipping Info</Typography>
							<div className="confirmshippingAreaBox">
								<div>
									<p>Name:</p>
									<span>{user.name}</span>
								</div>
								<div>
									<p>Phone:</p>
									<span>{shippingInfo.phoneNo}</span>
								</div>
								<div>
									<p>Address:</p>
									<span>{address}</span>
								</div>
							</div>
						</div>
						<div className="confirmCartItems">
							<Typography>Your Cart Items:</Typography>
							<div className="confirmCartItemsContainer">
								{cartItems &&
									cartItems.map((item) => (
										<div key={item.product}>
											<img src={item.image} alt="Product" />
											<Link to={`/product/${item.product}`}>
												{item.name}
											</Link>{' '}
											<span>
												{item.quantity} X ${item.price} ={' '}
												<b>${item.price * item.quantity}</b>
											</span>
										</div>
									))}
							</div>
						</div>
					</div>
					{/*  */}
					<div>
						<div className="orderSummary">
							<Typography>Order Summery</Typography>
							<div>
								<div>
									<p>Subtotal:</p>
									<span>${subtotal}</span>
								</div>
								<div>
									<p>Shipping Charges:</p>
									<span>${shippingCharges}</span>
								</div>
								<div>
									<p>GST:</p>
									<span>${tax}</span>
								</div>
							</div>

							<div className="orderSummaryTotal">
								<p>
									<b>Total:</b>
								</p>
								<span>${totalPrice}</span>
							</div>

							<button onClick={proceedToPayment}>
								Proceed To Payment
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Confirm;
