import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

export default function Navbar({ onMenuChange }) {
    const [menu, setMenu] = useState("Home");

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem); 
        onMenuChange(menuItem);
    };
    

    return (
        <div className='navbar'>
            <div className='left-nav'>
                <img onClick={() => handleMenuClick("Home")} src={assets.logo} alt="" />
            </div>
            <div className='right-nav'>
                <button onClick={() => handleMenuClick("OurStory")} className={menu === "OurStory" ? "active" : ""}>Our Story</button>
                <button onClick={() => handleMenuClick("Membership")} className={menu === "Membership" ? "active" : ""}>Membership</button>
                <button onClick={() => handleMenuClick("WriteBlog")} className={menu === "WriteBlog" ? "active" : ""}>Write</button>
                <button onClick={() => handleMenuClick("Contactus")} className={menu === "Contactus" ? "active" : ""}>Contact us</button>
                <button href="#" className='special-nav-link'>Get Started</button>
            </div>
        </div>
    );
}
