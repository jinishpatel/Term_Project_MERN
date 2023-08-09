import React from 'react';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
import ShippingInfo from '../components/shipping/ShippingInfo';

const Cart = () => {
  return (
    <div>
      <NavBar />
      <ShippingInfo />
      <Footer />
    </div>
  )
}

export default Cart;