import React from 'react'
import './Mypost.css'
import ProfileDetails from './ProfileDetails/ProfileDetails'

export default function Mypost() {
  return (
    <div className='feed-container-box'>
      <div className="feed-post-head">
        <h3>Feed</h3>
        <p>2 mounth Ago</p>
      </div>
      <ProfileDetails />
    </div>
  )
}
