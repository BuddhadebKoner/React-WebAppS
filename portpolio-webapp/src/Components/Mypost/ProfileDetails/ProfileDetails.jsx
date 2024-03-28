import React from 'react'
import './ProfileDetails.css'
import assets from '../../../assets/icons/icons'

export default function ProfileDetails() {
  return (
    <>
    <div className="feed-post-profile">
        <img src={assets.profile} alt="" />
        <h4>Buddhadeb Koner</h4>
        <p>Add New Post</p>
      </div>
    </>
  )
}
