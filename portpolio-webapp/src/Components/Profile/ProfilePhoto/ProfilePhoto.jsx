import React from 'react'
import './ProfilePhoto.css'
import assets from '../../../assets/icons/icons'

export default function ProfilePhoto() {
    return (
        <>
            <div className="profile-photobox">
                <img src={assets.profile} alt="" />
            </div>
            <div className="profile-name">
                <h3>Buddhadeb Koner</h3>
                <p>ko-fi.com/bensonruan</p>
            </div>

        </>
    )
}
