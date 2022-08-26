import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Feed from '../../components/feed/Feed';
import './Profile.css'

interface user {
  name: string;
  picture: any;
  human: string;
  age: number;
  location: string;
  toys: string;
  bio: string;
}

function Profile() {
  return (
    <div className='profile-page-container'>
      <Navbar />
      <div className='profile-container'>
        <img className='profile-picture' src="https://avatars.githubusercontent.com/u/42795152?v=4" alt='🐕' />
        <div className='profile-bio-info'>
          <p className='profile-info dog-name'>Harlow</p>
          <p className='profile-info human-name'>Cared for by: Andrew Griswold</p>
          <p className='profile-info age'>Age: 4</p>
          <p className='profile-info toys'>Favorite Toys: Stuffed Animals</p>
          <p className='profile-info bio'>Bio: Harlow is a super friendly dog but takes some time to warm up to new faces.
          She loves playing outside and is queen of comfort. 10/10</p>
        </div>
        <div className='favorite-parks'>
          <p className='profile-info location'>Near: Bedford</p>
          <ul className='fav-parks-ul'>
            <li className='fav-park-li'> Livingston</li>
            <li className='fav-park-li'> Zilker</li>
            <li className='fav-park-li'> Barton Springs</li>
          </ul>
        </div>
      </div>
      <Feed />
    </div>
  )
}

export default Profile;