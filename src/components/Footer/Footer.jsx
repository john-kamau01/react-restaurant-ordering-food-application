import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';

import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer mt-5'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='logo footer__logo'>
              <img src={logo} alt="logo" />
              <h5>Fast Food Order</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad porro praesentium quia voluptates, a id.</p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00 am - 11:00 pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>2:00 pm - 9:00 pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact Us</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p>Location: West side Woodly greens</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: (+1) 123 4567</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: support@fastfood.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <div className='newsletter'>
              <input type="email" placeholder="Enter your email" />
              <span><i className="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>&copy; Copyright All Rights Reserved 2022</p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
              <p className='mb-0'>Follow: </p>
              <span><Link to='#'><i className='ri-facebook-line'></i></Link></span>
              <span><Link to="#"><i className='ri-twitter-line'></i></Link></span>
              <span><Link to="#"><i className='ri-linkedin-line'></i></Link></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;