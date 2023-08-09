import './cartPage.css';
import CartItemCard from './CartItemCard';

import  { Fragment } from 'react'
import { useSelector ,useDispatch} from 'react-redux';  
import { addItemsToCart,removeItemsFromCart } from '../../actions/cartAction';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Typography } from '@mui/material';
import { Link ,useNavigate} from 'react-router-dom';

const CartPage = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);
  const increaseQuantity = (id,quantity,stock) => {
    const newQty = quantity + 1;
    if(newQty > stock) return;
    dispatch(addItemsToCart(id,newQty));
  }
  const decreaseQuantity = (id,quantity) => {
    const newQty = quantity - 1;
    if(newQty < 1) return;
    dispatch(addItemsToCart(id,newQty));
  }
  const deleteCartItems = (id) => { 
    dispatch(removeItemsFromCart(id));
  };
  const checkoutHandler = () => { 
    Navigate('/login?redirect=shipping')
  }
  
  return (
    <Fragment>
      { 
        cartItems.length === 0 ? (<div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/product">View Products</Link>
        </div>) :
          (<Fragment>
      <div className="cart-page">
      <div className="cartHeader">
        <p>Product</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
              {cartItems && cartItems.map((item) => (
                <div className='cartContainer' key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className='cartInput'>
                    <button onClick={() =>
                      decreaseQuantity(
                        item.product,
                        item.quantity,
                        item.stock
                      )
                    }>-</button>
                    <input readOnly type="number" value={item.quantity}></input>
                    <button onClick={() =>
                      increaseQuantity(
                        item.product,
                        item.quantity,
                        item.stock
                      )
                    }>+</button>
                  </div>
                  <div className='cartSubtotal'>{`$${item.price * item.quantity}`}</div>
                </div>
              ))}
      <div className='cartGrossProfit'>
      <div></div>
        <div className="cartGrossProfitBox">
          <p>GrossProfit</p>
          <p>{`$${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}`}</p>
        </div>
        <div></div>
        <div className='checkOutBtn' onClick={checkoutHandler}>
          <button>Check Out</button>
        </div>
      </div>
      </div>
  </Fragment>)
  }
  </Fragment>
  )
}

export default CartPage;