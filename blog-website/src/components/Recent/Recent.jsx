// Recent.jsx
import React from 'react'
import './Recent.css'
import Card from './Recent_card/Card'
import { assets } from '../../assets/assets'

export default function Recent() {
    const profileImages = [
        assets.profile1,
        assets.profile2,
        assets.profile3,
        assets.profile4,
        assets.profile5,
        assets.profile6
        // Add more profile images as needed
    ];

    return (
        <>
            <div className='Recent-story-feed'>
                <div className="trending-text">
                    <img src="/trending-icon.png" className='trending-ison-img' alt="." />
                    <h2>Trending on CodeHub</h2>
                </div>
                <div className='recent-cards-container'>
                    {profileImages.map((profileImage, index) => (
                        <Card 
                            key={index} 
                            index={index + 1} 
                            name={`User ${index + 1}`} 
                            description={`Description ${index + 1}`} 
                            profileImage={profileImage} 
                        />
                    ))}
                </div>
            </div>
        </>
    )
}