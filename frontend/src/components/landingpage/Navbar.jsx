import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Campus Calendar Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/calendar">Calendar</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;