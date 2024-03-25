import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

export default function Navbar() {

    const [menu, setMenu] = useState("Home");

    return (
        <>
            <div className='navbar'>
                <div className='left-nav'>
                    <img onClick={() => setMenu("Home")} src={assets.logo} alt="" />
                </div>
                <div className='right-nav'>
                    <button onClick={() => setMenu("OurStory")} className={menu === "OurStory" ? "active" : ""}>Our Story</button>
                    <button onClick={() => setMenu("Membership")} className={menu === "Membership" ? "active" : ""}>Membership</button>
                    <button onClick={() => setMenu("WriteBlog")} className={menu === "WriteBlog" ? "active" : ""}>Write</button>
                    <button onClick={() => setMenu("Contactus")} className={menu === "Contactus" ? "active" : ""}>Contact us</button>
                    <button href="#" className='special-nav-link'>Get Started</button>
                </div>
            </div>
        </>
    )
}
