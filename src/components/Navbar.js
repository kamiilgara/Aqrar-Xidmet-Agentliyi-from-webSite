import React from 'react'
import NavbarCenter from './NavbarCenter'
import NavbarTop from './NavbarTop'

function Navbar() {
  return (
    <div className='navbarBackground'>
      <NavbarTop />
      <NavbarCenter />
    </div>
  )
}

export default Navbar
