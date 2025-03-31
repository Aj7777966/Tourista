import React, { useState } from "react";
import "../assets/App1.css"; // Import CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand"><a href="/">TOURISTA</a></div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/destination">Destinations</a></li>  
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>  
          <li><a href="/register">Register</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        ☰
          
        </div>
      </nav>

      {/* Overlay Menu for Mobile */}
      <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={toggleMenu}></div>
    </>
  );
};

export default Navbar;





