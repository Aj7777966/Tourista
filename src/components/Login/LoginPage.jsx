import React from 'react';
import '../../assets/App1.css'


const Page = () => {
  return (
    <>
     
      <header className="App-header">
      <div class="overlay-dropdown" id="overlay">
        <div class="brand">
            <h1>Tourista</h1>
        </div>
        <ul>
            <li><a href="#intro-div" onclick="navigation()">Home</a></li>
            <li><a href="#about-div" onclick="navigation()">About</a></li>
            <li><a href="#services-div" onclick="navigation()">Services</a></li>
            <li><a href="#contact-div" onclick="navigation()">Contact</a></li>
            <li><a href="#blog-div" onclick="navigation()">Blog</a></li>
            <li>
              <a href="#login-div" onclick="navigation()">Login</a>/
              <a href="#register-div" onclick="navigation()">Register</a>
              </li>

        </ul>

    </div>

    <div class="tourista-navbar">
        <div class="brand">
            <h1>TOURISTA  </h1>
        </div>
        <ul>
            <li><a href="/">Home</a><div class="rect"></div></li>
            <li><a href="/about">About</a><div class="rect"></div></li>
            <li><a href="/services">Services</a><div class="rect"></div></li>
            <li><a href="/contact">Contact</a><div class="rect"></div></li>
            <li><a href="/blog">Blog</a><div class="rect"></div></li>
            <li> <a href="/login">Login</a>/<a href="/register">Register</a><div class="rect"></div></li>
             
        </ul>

        <div class="navbar-toggler" id="toggler" onclick="mobilenav()">
            <div class="line1" id="ln1"></div>
            <div class="line2" id="ln2"></div>
        </div>

    </div>


    <br/><br/><br/><br/><br/>
    <h1 className='h1'>LOGIN PAGE</h1>
    
      <br/><br/>
        <div class="box">
        <span class="borderLine"></span>
        <form action="">
            <h2>Sign in</h2>
            <div class="inputBox">
                <input type="text" className="input" placeholder='Username'required />
                <i></i>
            </div>
            <div class="inputBox">
                <input type="password" placeholder='Password' required />
                <i></i>
            </div>
            <div class="links">
                <a href="#">Forgot Password</a>
                <a href="#">Signup</a>
            </div>
            <input type="submit" id="submit" value="Login" />
        </form>
    </div>
    



      </header>
    </>
  )
}

export default Page






