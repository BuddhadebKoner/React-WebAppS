import React from 'react'
import './ProfileDetails.css'
import { assets } from '../../../assets/postimg/postimg'


export default function ProfileDetails(props) {
  const { media, Medialink } = props;
  return (
    <>
      <div className="main-container-profile-details">
        <div className="feed-post-profile">
          <img className='post-profile-icon' src={media} alt="" />
          <h4>Buddhadeb Koner</h4>
          <a href={Medialink} className='see-original-post' target="_blank">See Original Post</a>
        </div>
        <div className="image-profile-threedot-container">
          <p>2 mounth ago</p>
          <button><img src={assets.threeDot} className='post-profile-threedots' alt="" /></button>
        </div>
      </div>
    </>
  )
}
