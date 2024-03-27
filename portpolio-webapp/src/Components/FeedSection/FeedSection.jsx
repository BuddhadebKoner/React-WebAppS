import React from 'react'
import './FeedSection.css'
import Mypost from '../Mypost/Mypost'
import Aboutcard from '../Aboutcard/Aboutcard'

export default function FeedSection() {
    return (
        <div className="feed-container">
            <div className="about-container">
                <Aboutcard />
            </div>
            <div className="mypost-container">
                <Mypost />
            </div>
        </div>
    )
}
