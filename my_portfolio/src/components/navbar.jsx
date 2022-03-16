import React from 'react';
// import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <>
        <header>
            <a href="/Portfolio-Website" className="logo"><i className="fab fa-node-j"></i> EHSAN</a>

            <div id="menu" className="fas fa-bars"></div>
            <nav className="navbar">
                <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
};
export default Navbar