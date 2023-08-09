/** @format */

import { useState } from 'react';

import { Route, Router, Routes } from 'react-router-dom';
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
import Payment from './routes/Paymentgatwat';
import ProductDetails from './routes/ProductDetails';
import store from './store';
import { loaduser, updateProfile } from './actions/userAction';
import UpdateProfile from './routes/UpdateProfile';
import UpdatePassword from './routes/UpdatePassword';
import Shipping from './routes/Shipping';
import { useSelector, useDispatch } from 'react-redux';
import ForgotPassword from './routes/ForgotPassword';

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

			{/* will do it later */}
			{/* <Route path="/password/reset/:token" element={<ForgotPassword />} /> */}

			<Route path="/payment" element={<Payment />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/ContactUs" element={<ContactUs />} />
		</Routes>
	);
}

export default App;
