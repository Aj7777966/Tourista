import React from 'react'
import "../App.css"
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    return (
        <>
            <footer className="footer">
  	 <div className="container1">
        <h1 className='h1'>TOURISTA</h1><br/>
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">read our blog</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Contact Us</a></li>
  	 				<li><a href="#">Terms and Conditions</a></li>
  	 				<li><a href="#">Provide Your Feedback</a></li>
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
		
		   <p className='p'>© 2025 Tourista. All rights reserved. Use of this website constitutes acceptance of our Terms of Service (updated April 1, 2021) and Policy and Cookie Statement (updated April 1, 2021). The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of Tourista.</p>
  	 </div>
  </footer>
        </>
    )
}

export default Footer
