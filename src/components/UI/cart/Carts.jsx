import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import CartItem from './CartItem';

import '../../../styles/shopping-cart.css';
import { useSelector, useDispatch } from 'react-redux';
import {toggle} from '../../../store/shopping-cart/cartUiSlice';

const Carts = () => {
  const dispacth = useDispatch();
  const cartProducts = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  const toggleCart = () => {
    dispacth(toggle());
  }

  return (
    <div className='cart__container'>
      <ListGroup className='cart'>
        <div className='cart__close'>
          <span onClick={toggleCart}><i className='ri-close-line'></i></span>
        </div>

        <div className='cart__item-list'>
          {cartProducts.length === 0 ? <h6 className='text-center mt-5'>No items in cart</h6> : 
          cartProducts.map((item, index) => {
            return <CartItem item={item} key={index} />
          })
          }
        </div>

        <div className='cart__bottom d-flex align-items-center justify-content-between'>
          <h6>Subtotal : <span>${totalAmount}</span></h6>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  )
}

export default Carts