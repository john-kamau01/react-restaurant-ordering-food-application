import React from 'react';
import { ListGroupItem } from 'reactstrap';

import '../../../styles/cart-item.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({item}) => {

  const {id, title, price, image01, quantity, totalPrice} = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }));
  }

  const decrementItem = () => {
    dispatch(cartActions.removeItem(id))
  }

  const removeItem = () => {
    dispatch(cartActions.deleteItem(id));
  }

  return (
      <ListGroupItem className='border-0 cart__item'>
        <div className='cart__item-info d-flex w-100 gap-2'>
          <img src={image01} alt='' />

          <div className='cart__product-info w-100 d-flex align-items-center justify-content-between'>
            <div>
              <h6 className='cart__product-title'>{title}</h6>
              <p className='cart__product-price d-flex align-items-center gap-5'>2x <span>${totalPrice}</span></p>
              <div className='d-flex align-items-center gap-3 increase__decrease-btn'>
                <span className='decrease__btn' onClick={decrementItem}><i className='ri-subtract-line'></i></span>
                <span className='quantity'>{quantity}</span>
                <span className='increase__btn' onClick={incrementItem}><i className='ri-add-line'></i></span>
              </div>
            </div>

            <span className='delete__btn' onClick={removeItem}><i className='ri-close-line'></i></span>
          </div>
        </div>
      </ListGroupItem>
  )
}

export default CartItem;