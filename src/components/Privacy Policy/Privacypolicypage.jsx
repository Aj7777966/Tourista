import React from 'react'
import Navbar from '../../Include/Navbar'
import Footer from '../../Include/Footer'
import "../Privacy Policy/policy.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoicemail } from '@fortawesome/free-solid-svg-icons/faVoicemail'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk'
const Privacypolicypage = () => {
  return (
    <>
      <Navbar />
      <section class="banner-policy">
        <h1 class="fade-in">PRIVACY POLICY</h1>
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

        <h3 className='heading-information fade-in delayed3'>3. How We Share Your Information</h3>
        <p className='policy-caption fade-in delayed3'>We do not sell your personal data. However, we may share your information with:</p>
        <ul className='fade-in delayed3'>
          <li className='list-type'>Travel service providers (hotels, airlines, and tour operators) to fulfill bookings.</li>
          <li className='list-type'>Third-party payment processors to securely process transactions.</li>
          <li className='list-type'>Legal authorities if required for fraud prevention or legal compliance.</li>
        </ul>

        <h3 className='heading-information fade-in delayed4'>4. How We Protect Your Data</h3>
        <ul className='fade-in delayed4'>
          <li className='list-type'>We implement SSL encryption to secure your information.</li>
          <li className='list-type'>We use firewalls and secure servers to protect against cyber threats.</li>
          <li className='list-type'>We restrict access to personal data to authorized personnel only.</li>
        </ul>

        <h3 className='heading-information fade-in delayed5'>5. Your Rights & Choices</h3>
        <p className='policy-caption fade-in delayed5'>As a user of TOURISTA, you have the following rights:</p>
        <ul className='fade-in delayed5'>
          <li className='list-type'>Access & Correction: You can request a copy of your data and correct inaccuracies.</li>
          <li className='list-type'>Data Deletion: You can request the deletion of your account and personal data.</li>
          <li className='list-type'>Opt-out: You can unsubscribe from marketing emails anytime.</li>
        </ul>
        <p className='policy-caption fade-in delayed5'>To exercise your rights, email us at [info@tourista.com].</p>

        <h3 className='heading-information fade-in delayed6'>6. Cookies & Tracking Technologies</h3>
        <p className='policy-caption fade-in delayed6'>We use cookies to:</p>
        <ul className='fade-in delayed6'>
          <li className='list-type'>Improve website performance and load times.</li>
          <li className='list-type'>Remember user preferences and login details.</li>
          <li className='list-type'>Analyze website traffic for better functionality.</li>
        </ul>
        <p className='policy-caption fade-in delayed6'>You can disable cookies in your browser settings, but some features may not work properly.</p>

        <h3 className='heading-information fade-in delayed7'>6. Cookies & Tracking Technologies</h3>
        <p className='policy-caption fade-in delayed7'>For any privacy concerns, contact us at:</p>
        <ul className='fade-in delayed7'>
          <li><FontAwesomeIcon icon={faMailBulk} /> info@tourista.com</li>
          <li><FontAwesomeIcon icon={faMobile} /> +91-884-961-551-1</li>

        </ul>

      </div>


      <Footer />
    </>
  )
}


export default Privacypolicypage
