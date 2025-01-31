import "../About us/About.css"
import "../../Include/ImageSlider"
import Navbar from "../../Include/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ImageSlider from "../../Include/ImageSlider";


const Page = () => {


  return (
    <>

      <header className="App-header">
      <Navbar/>
        <ImageSlider/>
        <br /><br /><br /><br /><br />

        <div class="main">
          <h1 className="card-header">WHY CHOOSE US ?</h1>
          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/600lxle70pgtx0qae8cgz/desitnation-exploration-1.jpg?rlkey=nro1euh6zqtulm7l7iq8fby1w&st=da39h3qv&dl=0" alt='this imag cannot be displyed at this time' /></div>
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
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/3tn8pfsfe0vpz9dgk2wko/Hotel-Booking.jpg?rlkey=pqdc2634bwu01orevfkytuxof&st=7r2miybj&dl=0" alt='this imag cannot be displyed at this time' /></div>
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
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/stkghniv2fdt5z1y2ajqf/transport-information.jpeg?rlkey=k9dbvrvd063wihj0idbl6p47r&st=71u0s8ln&dl=0" alt='this imag cannot be displyed at this time' /></div>
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
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/uu8hb342co4heawag974v/food-and-dining.jpg?rlkey=4yf5ohwef5bdndsutksymj390&st=4s3k2229&dl=0" alt='this imag cannot be displyed at this time' /></div>
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
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/ffr73vh4r90ph6lbdw38z/Travel-Packages.jpg?rlkey=sltzinz6py84ozizatkqbtls4&st=dr82mh48&dl=0" alt='this imag cannot be displyed at this time' /></div>
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
                <div class="card_image"><img src="https://dl.dropbox.com/scl/fi/gg0vawluhuk38bf0xj5ob/Budget-Friendly-Options.jpg?rlkey=oniw3zn6k2y0fo4hhcldyzvnn&st=si324soy&dl=0" alt='this imag cannot be displyed at this time' /></div>
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
        <br /><br />

        {/* team section starts here */}
        <h1 className="card-header">OUR TEAM</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box1 shadow-sm p-4">
                <div className="image-wrapper mb-3">
                  <img className="img-fluid" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="..." />
                </div>
                <div className="box1-desc">
                  <h5>Aditya Jha</h5>
                  <p>Frontend developer and web designer</p>
                </div>
                <ul className="social">
                  <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 my-auto">
              <div className="box1 shadow-sm p-4">
                <div className="image-wrapper mb-3">
                  <img className="img-fluid" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="..." />
                </div>
                <div className="box1-desc">
                  <h5>Chirag Gohel</h5>
                  <p>Backend Developer</p>
                </div>
                <ul className="social">
                  <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>






      </header>
    </>
  )
}

export default Page






