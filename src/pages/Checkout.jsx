import React from 'react';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

import '../styles/checkout.css';
import { useState } from 'react';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Helmet title="checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6>Shipping Address</h6>
              <form className='checkout__form' onSubmit={handleSubmit}>
                <div className='form__group'>
                  <input type="text" placeholder='Your name' onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='form__group'>
                  <input type="email" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='form__group'>
                  <input type="number" placeholder='Phone no.' onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className='form__group'>
                  <input type="text" placeholder='Country' onChange={(e) => setCountry(e.target.value)} />
                </div>

                <div className='form__group'>
                  <input type="text" placeholder='City' onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className='form__group'>
                  <input type="number" placeholder='Postal code' onChange={(e) => setPostalCode(e.target.value)} />
                </div>

                <button type='submit' className='addToCart__btn'>Pay Now</button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className='checkout__bill'>
                <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>${cartTotalAmount}</span></h6>
                <h6 className='d-flex align-items-center justify-content-between mb-4'>Shipping: <span>${shippingCost}</span></h6>
                <div className='checkout__total'>
                  <h5 className='d-flex align-items-center justify-content-between'>Total: <span>${totalAmount}</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout