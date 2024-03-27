import React from 'react'
import './FeedSection.css'
import Mypost from '../Mypost/Mypost'
import Aboutcard from '../Aboutcard/Aboutcard'
import Feedback from '../Feedback/Feedback'

export default function FeedSection() {
    return (
        <div className="feed-container">
            <div className="about-container">
                <Aboutcard />
            </div>
            <div className="mypost-container">
                <Feedback />
                <Mypost />
            </div>
        </div>
    )
}
