import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import logo from './images/logo.png';


import './navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    

    

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>Overview</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#whyrecruitus' onClick={closeMenu}>Why Recruit US</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Past' onClick={closeMenu}>Past Recruiters</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#statistics' onClick={closeMenu}>Statistics</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#ContactUs' onClick={closeMenu}>Contact Us</a>
                    </li>
                    <li className='nav-item'>
                       
                        <Link className="navbar-brand" to="/Login"><a href='#fom' >Login</a></Link>
                    </li>
                    
                    
                    
                    
                </ul>
            </nav>
            
        </div>
    );
}

export default Navbar