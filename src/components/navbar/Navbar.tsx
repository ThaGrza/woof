import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
  return (
    <div className='nav-container'>
      <Link to='/' className='nav-title-link'>
        <h1 className='nav-title'>Woofer</h1>
      </Link>
    </div>
  )
}

export default Navbar