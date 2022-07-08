import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SearchBar from '../../components/searchbar/searchbar';

function homepage() {
  return (
    <div className='container'>
      <Navbar />
      <SearchBar />
    </div>
  )
}

export default homepage;