/** @format */

import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Products from './routes/Products';
import Cart from './routes/Cart';
import Search from './routes/Search';
import ContactUs from './routes/ContactUs';
import UProfile from './routes/UserProfile';
import Login from './routes/Login';
import Index from './routes/Index';
import Webfont from 'WebFontLoader';
import React from 'react';
import ProductDetails from './routes/ProductDetails';
import ConfirmOrder from './routes/ConfirmOrder';
import store from './store';
import { loaduser, updateProfile } from './actions/userAction';
import UpdateProfile from './routes/UpdateProfile';
import UpdatePassword from './routes/UpdatePassword';
import Shipping from './routes/Shipping';
import Payment from './routes/Payment';
import { useSelector, useDispatch } from 'react-redux';
import ForgotPassword from './routes/ForgotPassword';
import SuccessPayment from './routes/SuccessPayment';

function App() {
	React.useEffect(() => {
		Webfont.load({
			google: {
				families: ['Roboto', 'Droid Sans', 'Chilanka'],
			},
		});
		store.dispatch(loaduser());
		store.dispatch(updateProfile());
	}, []);

	return (
		<Routes>
			<Route exact path="/" element={<Index />} />
			<Route exact path="/product/:id" element={<ProductDetails />} />
			<Route exact path="/product" element={<Products />} />
			<Route path="/products/:keyword" element={<Products />} />
			<Route exact path="/search" element={<Search />} />
			<Route path="/login" element={<Login />} />
			<Route path="/me" element={<UProfile />} />
			<Route path="/me/update" element={<UpdateProfile />} />
			<Route path="/password/update" element={<UpdatePassword />} />
			<Route path="/password/forgot" element={<ForgotPassword />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/shipping" element={<Shipping />} />
			<Route path="/order/confirm" element={<ConfirmOrder />} />
			<Route path="/process/payment" element={<Payment />} />
			<Route path="/success" element={<SuccessPayment />} />
			{/* will do it later */}
			{/* <Route path="/password/reset/:token" element={<ForgotPassword />} /> */}
		</Routes>
	);
}

export default App;
