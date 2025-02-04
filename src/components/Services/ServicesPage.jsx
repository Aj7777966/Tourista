import React from 'react';
import '../../assets/App1.css'
import Navbar from "../../Include/Navbar"
import Footer from "../../Include/Footer";

const Page = () => {
  return (
    <>
    
      <header className="App-header">
      <Navbar/>

        <br /><br /><br /><br /><br />
        {/* <h1 className='h1'>OUR SERVICES</h1> */}

        {/* <div className="container">
          <br /><br />
          <div className="slider-background">
          </div>
        </div> */}
        <div class="main">
          <h1 className="card-header">OUR SERVICES</h1>
          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/600lxle70pgtx0qae8cgz/desitnation-exploration-1.jpg?rlkey=nro1euh6zqtulm7l7iq8fby1w&st=da39h3qv&dl=0" /></div>
                <div class="card_content">
                  <h2 class="card_title">Destination Exploration</h2>
                  <br />
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/zx554u5qycfdx8uifetf8/Hotel-Booking.jpg?rlkey=ly0ehk0xnlb486x34r85luuqw&st=r1xkvz5x&dl=0" /></div>
                <div class="card_content">
                  <h2 class="card_title">Accommodation Booking</h2>
                  <br />
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/stkghniv2fdt5z1y2ajqf/transport-information.jpeg?rlkey=k9dbvrvd063wihj0idbl6p47r&st=71u0s8ln&dl=0" /></div>
                <div class="card_content">
                  <h2 class="card_title">Transport Information</h2>
                  <br />
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/uu8hb342co4heawag974v/food-and-dining.jpg?rlkey=4yf5ohwef5bdndsutksymj390&st=4s3k2229&dl=0" /></div>
                <div class="card_content">
                  <h2 class="card_title">Food and Dining</h2>
                  <br />
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/ffr73vh4r90ph6lbdw38z/Travel-Packages.jpg?rlkey=sltzinz6py84ozizatkqbtls4&st=dr82mh48&dl=0" /></div>
                <div class="card_content">
                  <h2 class="card_title"> Travel Packages</h2>
                  <br />
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/gg0vawluhuk38bf0xj5ob/Budget-Friendly-Options.jpg?rlkey=oniw3zn6k2y0fo4hhcldyzvnn&st=si324soy&dl=0" /></div>
                <div class="card_content">
                  <h2 class="card_title">Budget-Friendly Options</h2>
                  <br />
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <br/><br/>
        <Footer/>




      </header>
    </>
  )
}

export default Page






