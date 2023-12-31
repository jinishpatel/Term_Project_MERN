import React from 'react';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
import CartPage from '../components/cart/CartPage';

const Cart = () => {
  return (
    <div>
      <NavBar />
      <CartPage />
      <Footer />
    </div>
  )
}

export default Cart;