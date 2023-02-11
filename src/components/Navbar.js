import React from 'react';
import { useState, useEffect } from 'react';
import NavbarCenter from './NavbarCenter';
import NavbarTop from './NavbarTop';

function Navbar() {

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {

    const updateScrollValue = () => {
      setScrollValue(window.pageYOffset);
    }

    window.addEventListener('scroll', updateScrollValue);


    updateScrollValue();

    return () => {
      window.removeEventListener('scroll', updateScrollValue);
    };

  }, [scrollValue]);

  return (
    <div className='navbarBackground'>
      <NavbarTop navBackStyle={scrollValue > 190 ? 'nav-area2' : 'nav-area'} navLinkStyle={scrollValue > 190 ? 'navLinks2' : 'navLinks'} logoStyle={scrollValue > 190 ? 'hasLogo' : 'noneLogo' } logoStyle1={scrollValue > 190 ? 'noneLogo' : 'hasLogo'} />
      <NavbarCenter />
    </div>
  )
}

export default Navbar
