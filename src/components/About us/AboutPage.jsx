import "../About us/About.css"
import "../../Include/ImageSlider"
import Navbar from "../../Include/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ImageSlider from "../../Include/ImageSlider";
import Footer from "../../Include/Footer";

const Page = () => {


  return (
    <>

      <header className="App-header">
        <Navbar />
        <ImageSlider />
        <br /><br /><br /><br /><br />

        <div class="main">
          <h1 className="card-header">WHY CHOOSE US ?</h1>
          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image skeleton"><img src="https://dl.dropbox.com/scl/fi/600lxle70pgtx0qae8cgz/desitnation-exploration-1.jpg?rlkey=nro1euh6zqtulm7l7iq8fby1w&st=da39h3qv&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title">Destination Exploration</h2>
                  <br />
                  <p class="card_text">Explore the destinations from all over india and browse the popular cities of all states of india</p>
                  <a href="/destination"><button class="btn">Read More</button></a>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card-image skeleton"><img src="https://dl.dropbox.com/scl/fi/zx554u5qycfdx8uifetf8/Hotel-Booking.jpg?rlkey=ly0ehk0xnlb486x34r85luuqw&st=r1xkvz5x&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title">Accommodation Booking</h2>
                  <br />
                  <p class="card_text">Get your own personalized booking through tour packagers</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card-image skeleton"><img src="https://dl.dropbox.com/scl/fi/stkghniv2fdt5z1y2ajqf/transport-information.jpeg?rlkey=k9dbvrvd063wihj0idbl6p47r&st=71u0s8ln&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title">Transport Information</h2>
                  <br />
                  <p class="card_text">Get all transport information related to the particular place</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card-image skeleton"><img src="https://dl.dropbox.com/scl/fi/uu8hb342co4heawag974v/food-and-dining.jpg?rlkey=4yf5ohwef5bdndsutksymj390&st=4s3k2229&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title">Food and Dining</h2>
                  <br />
                  <p class="card_text">explore different kind and varities of taste of all over india with its own elegance</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card-image skeleton"><img src="https://dl.dropbox.com/scl/fi/ffr73vh4r90ph6lbdw38z/Travel-Packages.jpg?rlkey=sltzinz6py84ozizatkqbtls4&st=35ok52k6&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title"> Travel Packages</h2>
                  <br />
                  <p class="card_text">Get personlaised travel packages from the tour planners and get personliased bookiing</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card-image skeleton"><img src="https://dl.dropbox.com/scl/fi/gg0vawluhuk38bf0xj5ob/Budget-Friendly-Options.jpg?rlkey=oniw3zn6k2y0fo4hhcldyzvnn&st=si324soy&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title">Budget-Friendly Options</h2>
                  <br />
                  <p class="card_text">Select your way of budget and travel palnning by exploring packages for tour </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <br /><br /><br /><br />

        {/* team section starts here */}
        <h2 className="h2">THE TEAM</h2>
        <div class="container">
          <div class="row vh-95">
            <div class="col-sm-6 col-lg-3 my-auto">
            </div>
            <div className="col-sm-6 col-lg-3 my-auto">
              <div className="box shadow-sm p-4">
                <div className="image-wrapper mb-3">
                  <img className="skeleton" src="https://dl.dropbox.com/scl/fi/3y6oyx476vgudu2t6iw7l/IMG-20241124-WA0031.jpg?rlkey=lxy9mp4fon603s8w2vm6bj365&st=q8wuledl&dl=0" alt="cannot display image at this time" />
                </div>
                <div className="box-desc">
                  <h5>Adityanath Jha</h5>
                  <p>Frontend Developer</p>
                </div>
                <ul className="social">
                <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 my-auto">
              <div className="box shadow-sm p-4">
                <div className="image-wrapper mb-3">
                  <img className="img-fluid" src="https://dl.dropbox.com/scl/fi/2q1gv8d1cgjrfdx3cm8j7/CHIRAG.jpg?rlkey=n0hltijqtwoqdnx862395jo5j&st=topt8sve&dl=0" alt="cannot display image at this time" />
                </div>
                <div className="box-desc">
                  <h5>Chirag Gohel</h5>
                  <p>Backend Developer</p>
                </div>
                <ul className="social">
                <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 my-auto"> 
            </div>

          </div>
        </div>





        <br /><br /><br/>
        <Footer />





      </header>
    </>
  )
}

export default Page






