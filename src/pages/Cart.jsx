import React from 'react';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';

import '../styles/cart-page.css';
import { useSelector, useDispatch } from 'react-redux';
import {cartActions} from '../store/shopping-cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title="cart">
      <CommonSection title="Your Cart"/>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? <h5>Your cart is empty</h5> : 
                <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => <Tr item={item} key={item.id}/>)}
                </tbody>
              </table>
              }

              <div className='mt-5'>
                <h6>Subtotal: $<span className='cart__subtotal'>{total}</span></h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className='cart__page-btn'>
                  <button className='addToCart__btn me-4'>
                    <Link to='/foods'>Continue Shopping</Link>
                  </button>
                  <button className='addToCart__btn'>
                    <Link to='/checkout'>Proceed to Checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = (props) => {
  const dispatch = useDispatch();

  const {id, image01, title, price, quantity} = props.item;

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  }
  return <tr>
    <td className='text-center cart__img-box'>
      <img src={image01} alt=""  />
    </td>
    <td className='text-center'>{title}</td>
    <td className='text-center'>${price}</td>
    <td className='text-center'>{quantity}</td>
    <td className='text-center cart__item-del'>
      <span onClick={deleteItem}><i className='ri-delete-bin-line'></i></span>
    </td>
  </tr>
}

export default Cart