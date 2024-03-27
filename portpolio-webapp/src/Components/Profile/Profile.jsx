import React from 'react'
import './Profile.css'
import ProfilePhoto from './ProfilePhoto/ProfilePhoto'

export default function Profile() {
    return (
        <>
            <div className="profile-container">
                <div className="profile-photo">
                    <ProfilePhoto />
                </div>
                <div className="follow-me">
                    <button className='super' href="">
                        <img src="/icons/donate.png" alt="" className='donate-icon' /><p className='donate-text'>Donate</p>
                    </button>
                    <button className='follow-btn hover-btn'>Follow</button>

                    <button className='mail-btn hover-btn'><img src="/icons/mail.png" alt="" className='mail-icon' /></button>

                    <button className='mail-btn hover-btn'><img src="/icons/threedot.png" alt="" className='mail-icon' /></button>
                </div>
            </div>
        </>
    )
}
