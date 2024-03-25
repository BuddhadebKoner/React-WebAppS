import React from 'react';
import './Hero.css';

export default function Hero({ backgroundImage }) {
    return (
        <div className='HeroBox' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1>Stay curious.</h1>
            <p>Discover stories, thinking, and <br />expertise from writers on {'{CODING}'}</p>
            <button className='special-hero-link'>Get Reading</button>
        </div>
    );
}
