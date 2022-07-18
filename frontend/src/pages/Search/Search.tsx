import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SearchBar from '../../components/searchbar/Searchbar';

function SearchPage() {
  return (
    <div className='container'>
      <Navbar />
      <SearchBar />
    </div>
  )
}

export default SearchPage;