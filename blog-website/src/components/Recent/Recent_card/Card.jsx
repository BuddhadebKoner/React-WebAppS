// Card.jsx
import React from 'react'
import './Card.css'

export default function Card({ index, name, description, profileImage }) {
    return (
        <>
            <div className='recent-card'>
                <p className='card-index-number'>{index}</p>
                <div className='card-context'>
                    <div className='user-profile-cards Margin-top-buttom'>
                        <img src={profileImage} alt="" /> {/* Use profileImage prop here */}
                        <p>{name}</p>
                    </div>
                    <p className='Margin-top-buttom recent-card-contex'>{description}</p>
                    <div className="upload-time-date Margin-top-buttom recent-card-date">
                        Mar 21, 2024 · 8 min read
                    </div>
                </div>
            </div>
        </>
    )
}