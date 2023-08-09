/** @format */

import React from 'react';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
import PaymentGatWay from '../components/payment/PaymentGatWay';

const Payment = () => {
	return (
		<div>
			<div>
				<NavBar />
				<PaymentGatWay />
				<Footer />
			</div>
		</div>
	);
};

export default Payment;
