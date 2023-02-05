import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import logo from '../images/logo.svg'

function NavbarTop() {
  return (
    <Row className='nav-area py-2'>
      <Col md={'6'} className='logo-area' >
        <a href='/' className='d-flex'>
          <img src={logo} className='d-inline-block' alt='Aqrar logo' />
        </a>
      </Col>
      <Col md={'4'} className='nav-right' >
        <ul>
          <li><a href='/' >info@axa.gov.az <FontAwesomeIcon icon={faEnvelope} /></a> </li>
          <li><a href='/' >088-588 <FontAwesomeIcon icon={faPhone} /> </a></li>
          <li><a href='/' ><FontAwesomeIcon icon={faFacebook} /> </a></li>
          <li><a href='/' ><FontAwesomeIcon icon={faInstagram} /> </a></li>
          <li><a href='/' ><FontAwesomeIcon icon={faYoutube} /> </a></li>
          <li className='text-light'><FontAwesomeIcon icon={faBars} /></li>
        </ul>
      </Col>
    </Row>
  )
}

export default NavbarTop;
