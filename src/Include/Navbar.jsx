import React from "react";
import "../assets/App1.css";
import { useState } from "react";


const Page = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState(""); // Define the state for input text

  const handleSearchToggle = (e) => {
    e.stopPropagation();
    if (isExpanded) {
      setSearchText(""); // Clear input when closing
    }
    setIsExpanded((prev) => !prev);
  };
  return (
    <>
      <div className="overlay-dropdown" id="overlay">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/destination">Destinations</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/login">Login</a>/ <a href="/register">Register</a>
          </li>
        </ul>
        <div className="brand">
          <a href="/"><h1>Tourista</h1></a>
        </div>
        <ul>
          <li>
            <a href="#intro-div">Home</a>
          </li>
          <li>
            <a href="#about-div">About</a>
          </li>
          <li>
            <a href="#services-div">Destinations</a>
          </li>
          <li>
            <a href="#contact-div">Contact</a>
          </li>
          <li>
            <a href="#blog-div">Blog</a>
          </li>
          <li>
            <a href="#login-div">Login</a>/ <a href="#register-div">Register</a>
          </li>
        </ul>
      </div>

      <div className="tourista-navbar">
        <div className="brand">
         <a id="gfg" href="/"><h1>TOURISTA</h1></a> 
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
            <div className="rect"></div>
          </li>
          <li>
            <a href="/about">About</a>
            <div className="rect"></div>
          </li>
          <li>
            <a href="/destination">Destinations</a>
            <div className="rect"></div>
          </li>
          <li>
            <a href="/contact">Contact</a>
            <div className="rect"></div>
          </li>
          <li>
            <a href="/blog">Blog</a>
            <div className="rect"></div>
          </li>
          <li>
            <a href="/login">Login</a>/ <a href="/register">Register</a>
            <div className="rect"></div>
          </li>
          <li>

          </li>
        </ul>

        {/* <div className="destinations-box-searchbar-container">
          <input
            type="text"
            className="searchbar-textbox"
            placeholder="Search Here"
            spellCheck="false"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div> */}


        {/* <div
      className={`spectacledcoder-search-bar ${isExpanded ? "expanded" : ""}`}
      onClick={handleSearchToggle}
    >
      <input
        type="text"
        name="search"
        placeholder="Search Places"
        className="spectacledcoder-search-input"
        autoComplete="on"
        value={searchText} // Bind input value to state
        onChange={(e) => setSearchText(e.target.value)} // Update state when typing
        onClick={(e) => e.stopPropagation()}
      />
      <img
        className="search-icon"
        width="30"
        height="30"
        src="https://img.icons8.com/sf-black/500/000000/search.png"
        alt="search"
      />
    </div> */}

        

        <div className="navbar-toggler" id="toggler">
          <div className="line1" id="ln1"></div>
          <div className="line2" id="ln2"></div>
        </div>




      </div>

    </>


  )
}
export default Page