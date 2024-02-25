import React from 'react'
import './header.css'
import LOGO from "../../assets/logo-2.png"

const Header = () => {
  return (
    <div className="header">
        <img src={LOGO} alt="gym-logo" className='logo'/>

        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why Us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header