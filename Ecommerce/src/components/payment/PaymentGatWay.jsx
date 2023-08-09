/** @format */

import './payment.css';
import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../shipping/CheckoutSteps';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useDispatch } from 'react-redux';
import { createOrder, clearErrors } from '../../actions/orderAction';

const PaymentGateway = () => {
	const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { shippingInfo, cartItems } = useSelector((state) => state.cart);
	const payBtn = useRef(null);
	const { user } = useSelector((state) => state.user);
	const { error } = useSelector((state) => state.newOrder);
	const [paymentProcessed, setPaymentProcessed] = useState(false);
	const submitHandler = async (e) => {
		e.preventDefault();

		payBtn.current.disabled = true;
		try {
			if (!paymentProcessed) {
				alert('Payment Successful');

				const order = {
					shippingInfo,
					orderItems: cartItems,
					paymentInfo: {
						id: '1234567890',
						status: 'success',
					},
					itemsPrice: orderInfo.subtotal,
					taxPrice: orderInfo.tax,
					shippingPrice: orderInfo.shippingCharges,
					totalPrice: orderInfo.totalPrice,
					user: user._id,
					orderStatus: 'Successful',
				};

				console.log('orderdetail', order);

				await dispatch(createOrder(order));
				navigate('/success');

				setPaymentProcessed(true);
			}
		} catch (error) {
			console.error('Payment error:', error);
		}
	};
	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, error, alert]);

	return (
		<Fragment>
			<div className="payment-main">
				<CheckoutSteps activeStep={2} />
				<div className="paymentContainer">
					<form className="paymentForm" onSubmit={submitHandler}>
						<Typography>Payment Information</Typography>
						<Typography>Card Info</Typography>
						<div>
							<CreditCardIcon />
							<Typography>Card Number:</Typography>
							<input className="paymentInput" type="text" required />
						</div>
						<div>
							<EventIcon />
							<Typography>Expiry Date:</Typography>
							<input className="paymentInput" type="text" required />
						</div>
						<div>
							<VpnKeyIcon />
							<Typography>CVV:</Typography>
							<input className="paymentInput" type="text" required />
						</div>

						<input
							type="submit"
							value={`pay - ${orderInfo && orderInfo.totalPrice}`}
							ref={payBtn}
							className="paymentFormBtn"
						/>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default PaymentGateway;
