import React from 'react'
import "../App.css"
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    return (
        <>
            <footer className="footer">
  	 <div className="container">
        <h1 className='h1'>TOURISTA</h1><br/>
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
  	 				<a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
  	 				<a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
  	 				<a href="#"><FontAwesomeIcon icon={faGithub}/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </>
    )
}

export default Footer
