/** @format */

import React from 'react';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
import Payment from '../components/payment/success';
const SuccessPayment = () => {
	return (
		<div>
			<NavBar />
			<Payment />
			<Footer />
		</div>
	);
};

export default SuccessPayment;
