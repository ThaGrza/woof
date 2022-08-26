import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
  let loggedIn = true;
  return (
    <div className='nav-container'>
      {/* if signed in, link points to homepage else signin page */}
      <Link to='/' className='nav-link title'>Woofer</Link>
      <Link to='/profile' className='nav-link loggin'>{loggedIn ? "Profile" : "Sign In"}</Link>
    </div>
  )
}

export default Navbar;