import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Profile.css'

function Profile() {
  return (
    <div className='App'>

      <Navbar />
      
      <img className='profile-picture' src="https://avatars.githubusercontent.com/u/42795152?v=4" alt='🐕' />

      <div className='profile-container'>
        <h2 className='profile-dog-name'>Harlow</h2>
        <h4 className='profile-human-name'>Cared for by: Andrew Griswold</h4>
        <p className='profile-info age'>Age: 4</p>
        <p className='profile-info location'>Near: Bedford</p>
        <p className='profile-info personality'>Personality Type: Shy,happy,excited, friendly!</p>
        <p className='profile-info toys'>Favorite Toys: Stuffed Animals</p>
        <p className='profile-info bio'>Bio: Harlow is a super friendly dog but takes some time to warm up to new faces.
        She loves playing outside and is queen of comfort. 10/10</p>
      </div>




        <div className='favorite-parks'>
          <ul className='fav-parks-ul'>
            <li className='fav-park-li'> Livingston</li>
            <li className='fav-park-li'> Zilker</li>
            <li className='fav-park-li'> Barton Springs</li>
          </ul>
        </div>


    </div>
  )
}

export default Profile;