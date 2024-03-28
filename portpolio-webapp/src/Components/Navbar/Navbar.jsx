import React from 'react'
import './Navbar.css'
import assets from '../../assets/icons/icons'

export default function Navbar() {
  return (
    <>
    <div className="navbar-container">
        <img className='homelogo' src={assets.home} alt="logo" />
        <div className="nav-links">
            <a className='nav-links-normal' href="">Login</a>
            <a className='nav-links-normal' href="">Explore</a>
            <a className='nav-links-normal' href="">Abaut</a>
            <a className='super' href="">Get Started</a>
        </div>
    </div>
    </>
  )
}
