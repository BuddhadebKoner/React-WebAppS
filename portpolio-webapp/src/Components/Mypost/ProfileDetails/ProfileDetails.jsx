import React from 'react'
import './ProfileDetails.css'
import assets from '../../../assets/icons/icons'

export default function ProfileDetails() {
  return (
    <>
      <div className="main-container-profile-details">
        <div className="feed-post-profile">
          <img className='post-profile-icon' src={assets.profile} alt="" />
          <h4>Buddhadeb Koner</h4>
          <p>Add New Post</p>
        </div>
        <div className="image-profile-threedot-container">
          <p>2 mounth ago</p>
          <button><img src={assets.threeDot} className='post-profile-threedots' alt="" /></button>
        </div>
      </div>
    </>
  )
}
