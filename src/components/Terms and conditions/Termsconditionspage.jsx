import React from 'react'
import "../Terms and conditions/terms.css"
import Navbar from "../../Include/Navbar"
import Footer from '../../Include/Footer'
const Termsconditionspage = () => {
  return (
    <>
    <div>
    <Navbar/>
    
    <section class="banner-terms">
  <h1 class="fade-in">TERMS AND CONDITIONS</h1>
  <p class="fade-in delayed">Tourista</p>
</section>
<div className='container1'>
<h3 className='heading-information fade-in delayed1'>1. Information We Collect</h3>
        <p className='policy-caption fade-in delayed1'>When you use TOURISTA, we may collect the following types of information:</p>

        <h3 className='heading-information fade-in delayed2'>2. How We Use Your Information</h3>
        <p className='policy-caption fade-in delayed2'>We use the collected information for the following purposes:</p>
        <ul className='fade-in delayed2'>
          <li className='list-type'>To process bookings and provide travel services</li>
          <li className='list-type'>To comply with legal obligations and regulations.</li>
          <li className='list-type'>To improve user experience through personalized recommendations.</li>
          <li className='list-type'>To send promotional offers, updates, and newsletters (you can opt-out anytime).</li>
        </ul>
  </div>
    <Footer/>  
    </div>
    </>
  )
}

export default Termsconditionspage
