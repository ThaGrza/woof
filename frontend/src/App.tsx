import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/searchbar/searchbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <SearchBar />
    </div>
  );
}

export default App;