import "../Home/Home.css"
import { useEffect } from "react";
import Navbar from "../../Include/Navbar"
import { homePageSlider, initializeSlider } from "./Home"

const Page = () => {
  
  useEffect(() => {
    homePageSlider(); // Run the GSAP slider effect
    initializeSlider(); // Initialize text slider
  }, []);

  return (
    <>
      <header className="App-header">
        <Navbar/>
          <div className="slider1">
            <ul className="items">
              <li className="item current">
                <img src="https://dl.dropbox.com/scl/fi/qfggqwanegr457q3r3csc/beach-2084350_1920-1-1.jpg?rlkey=eb5jsxsm4yx8y44zf7kobyj67&st=qy36r4lk&dl=0" />
              </li>
              <li className="item">
                <img src="https://dl.dropbox.com/scl/fi/0cssaslypvcer4vx1fg96/kashmir.jpg?rlkey=fdlby6c4hazep5cvgpnmn6bu8&st=uog10mw6&dl=0" />
              </li>
              <li className="item">
                <img src="https://dl.dropbox.com/scl/fi/y9h3ni1yfoq0lou7aro3j/camping-3893587_1920-1-1.jpg?rlkey=ahxmge1zsuf4hdlv7ave2w69i&st=ltt4ahzo&dl=0" />
              </li>
              <li className="item">
                <img src="https://dl.dropbox.com/scl/fi/uma0vloke7j0t6p9rsrc1/mountain-3800239_1920-1.jpg?rlkey=buxe5ahm6j87xaam06w2wr7mk&st=nq27kavr&dl=0" />
              </li>
            </ul>
          </div>
          <br /> <br /> <br /> <br />
          
          <div className="slider">
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat:800"
              rel="stylesheet"
            />
            <div className="line">FIND</div>
            <br/>
            <div className="line">EXPLORE</div>
            <br/>
            <div className="line">EXPERIENCE</div>
            <br/>
            <div className="line">
              TOURISTA WAY!
            </div>
          </div>



       



        {/* Text slider starts here */}
        {/* Text slider ends here */}

        <div class="main">
          <h1 className="card-header">TOP DESTINATIONS</h1>
          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://picsum.photos/500/300/?image=5" /></div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://picsum.photos/500/300/?image=11" /></div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://picsum.photos/500/300/?image=14" /></div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://picsum.photos/500/300/?image=17" /></div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
          </ul>
        </div>


      </header>
    </>
  );
};

export default Page;
