import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
  return (
    <div className='nav-container'>
      {/* if signed in, link points to homepage else signin page */}
      <Link to='/' className='nav-title-link'>Woofer</Link>
    </div>
  )
}

export default Navbar;