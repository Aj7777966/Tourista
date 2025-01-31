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
                <img src="https://dl.dropbox.com/scl/fi/fe47571tivrix8851efkh/beach-2084350_1920-1-1.jpg?rlkey=fnkz6s1jyu3hjh59702lrdh37&st=nh77zf9u&dl=0" />
              </li>
              <li className="item">
                <img src="https://dl.dropbox.com/scl/fi/dtiseoiajb9ki9nhqggsw/kashmir.jpg?rlkey=f51xkgpjoxsho0hgcjkr8a3hs&st=qxpydhv1&dl=0" />
              </li>
              <li className="item">
                <img src="https://dl.dropbox.com/scl/fi/mu860onjj025az2b3oewt/camping-3893587_1920-1-1.jpg?rlkey=qyh12h1c66sp4h014uk7axn2e&st=tgel3b0f&dl=0" />
              </li>
              <li className="item">
                <img src="https://dl.dropbox.com/scl/fi/ompby6n9jot0dz3zkezjq/mountain-3800239_1920-1.jpg?rlkey=hm6d5gjstnqmorizew5k60mx0&st=q6qwt1ns&dl=0" />
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
            <br /><br />
            <div className="line">EXPLORE</div>
            <br /><br />
            <div className="line">EXPERIENCE</div>
            <br /><br />
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
