import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import logo from '../images/logo.svg';
import greenLogo from '../images/green-logo.svg';

function NavbarTop(props) {
  return (
    <Row className={props.navBackStyle} >
      <Col md={'6'} className='logo-area' >
        <a href='/' className='d-flex'>
          <img src={logo} className={props.logoStyle1} alt='Aqrar logo' />
          <img src={greenLogo} className={props.logoStyle} width={'343px'} height={'60px'} alt='Aqrar logo' />
        </a>
      </Col>
      <Col md={'4'} className='nav-right' >
        <ul>
          <li><a href='/' className={props.navLinkStyle} >info@axa.gov.az <FontAwesomeIcon icon={faEnvelope} /></a> </li>
          <li><a href='/' className={props.navLinkStyle} >088-588 <FontAwesomeIcon icon={faPhone} /> </a></li>
          <li><a href='/' className={props.navLinkStyle} ><FontAwesomeIcon icon={faFacebook} /> </a></li>
          <li><a href='/' className={props.navLinkStyle} ><FontAwesomeIcon icon={faInstagram} /> </a></li>
          <li><a href='/' className={props.navLinkStyle} ><FontAwesomeIcon icon={faYoutube} /> </a></li>
          <li className='text-light'><FontAwesomeIcon icon={faBars} /></li>
        </ul>
      </Col>
    </Row>
  )
}

export default NavbarTop;
