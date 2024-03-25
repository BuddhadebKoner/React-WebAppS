import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

export default function Navbar() {

    const [menu, setMenu] = useState("Home");

    return (
        <>
            <div className='navbar'>
                <div className='left-nav'>
                    <img onClick={()=> setMenu("Home")} src={assets.logo} alt="" />
                </div>
                <div className='right-nav'>
                    <a onClick={() => setMenu("OurStory")} href="#" className={menu === "OurStory" ? "active" : ""}>Our Story</a>
                    <a onClick={() => setMenu("Membership")} href="#" className={menu === "Membership" ? "active" : ""}>Membership</a>
                    <a onClick={() => setMenu("WriteBlog")} href="#" className={menu === "WriteBlog" ? "active" : ""}>Write</a>
                    <a onClick={() => setMenu("Contactus")} href="#" className={menu === "Contactus" ? "active" : ""}>Contact us</a>
                    <a href="#" className='special-nav-link'>Get Started</a>
                </div>
            </div>
        </>
    )
}
