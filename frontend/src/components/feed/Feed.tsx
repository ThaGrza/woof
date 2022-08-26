import React from 'react';
import './Feed.css';

const Feed = (props: any) => {
    return(
        <div className='feed-container'>
            <div className='post'>
                <h4 className='feed-title'>Posts</h4>
                <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" alt="We're having trouble displaying this." className='image-post'/>
                <p className='user-name'>Harley95</p>
                <input className='post-comment' placeholder='comments'></input>
            </div>
        </div>
    )
}

export default Feed;