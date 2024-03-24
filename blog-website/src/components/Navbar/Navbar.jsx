import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


export default function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='left-nav'>
                    <img src={assets.logo} alt="" />
                </div>
                <div className='right-nav'>
                    <a href="#" className='normal-nav-link'>Our Story</a>
                    <a href="#" className='normal-nav-link'>Membership</a>
                    <a href="#" className='normal-nav-link'>Write</a>
                    <a href="#" className='normal-nav-link'>Contac us</a>
                    <a href="#" className='special-nav-link'>Get Started</a>
                </div>
            </div>
            <hr></hr>
        </>
    )
}
