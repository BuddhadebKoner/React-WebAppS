import React from 'react'
import './Mypost.css'
// import ProfileDetails from './ProfileDetails/ProfileDetails'
import Postdetails from '../Postdetails/Postdetails'

export default function Mypost() {
  return (
    <div className='feed-container-box'>
      <div className="feed-post-head">
        <h3>Feed</h3>
      </div>
      <Postdetails />
    </div>
  )
}
