import "../Home/Home.css";
import { useEffect, useState } from "react";
import Navbar from "../../Include/Navbar";
import { homePageSlider, initializeSlider } from "./Home";
import { Link } from "react-router-dom";
import Footer from "../../Include/Footer";
import { faRightLong } from "@fortawesome/free-solid-svg-icons/faRightLong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Socialhover from "../../Include/socialhover";
import PlaneBanner from "../../Include/PlaneBanner";

const Page = () => {
  const [topDestinations, setTopDestinations] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const topCityNames = [
    "Mumbai", "Delhi", "Ahmedabad", "Mount Abu", "Udaipur", "Kashmir",
    "Manali", "Lonavala", "Banglore", "Kerala",
    "Ayodhya", "Jaipur"
  ];

  //calling the api for destinations by using useffct
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/destinations");
        const data = await response.json();
        setAllCities(data);

        // Filter the fetched cities that match topCityNames
        const filteredTop = data.filter(city => topCityNames.includes(city.cityname));
        setTopDestinations(filteredTop);

      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);


  //for gsap slider effect 
  useEffect(() => {
    homePageSlider(); // Run the GSAP slider effect
    initializeSlider(); // Initialize text slider
  }, []);

  return (
    <>
      <header className="App-header">
        <Navbar />
        {/* <PlaneBanner/> */}
        <div className="slider1">
          <ul className="items">
            <li className="item current">
              <img src="https://dl.dropbox.com/scl/fi/qfggqwanegr457q3r3csc/beach-2084350_1920-1-1.jpg?rlkey=eb5jsxsm4yx8y44zf7kobyj67&st=qy36r4lk&dl=0" className="skeleton" />
            </li>
            <li className="item ">
              <img src="https://dl.dropbox.com/scl/fi/0cssaslypvcer4vx1fg96/kashmir.jpg?rlkey=fdlby6c4hazep5cvgpnmn6bu8&st=uog10mw6&dl=0" className="skeleton" />
            </li>
            <li className="item">
              <img src="https://dl.dropbox.com/scl/fi/y9h3ni1yfoq0lou7aro3j/camping-3893587_1920-1-1.jpg?rlkey=ahxmge1zsuf4hdlv7ave2w69i&st=ltt4ahzo&dl=0" className="skeleton" />
            </li>
            <li className="item">
              <img src="https://dl.dropbox.com/scl/fi/uma0vloke7j0t6p9rsrc1/mountain-3800239_1920-1.jpg?rlkey=buxe5ahm6j87xaam06w2wr7mk&st=nq27kavr&dl=0" className="skeleton" />
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
          <br />
          <div className="line">EXPLORE</div>
          <br />
          <div className="line">EXPERIENCE</div>
          <br />
          <div className="line">TOURISTA WAY!</div>
        </div>

        {/* Top destination section starts here */}
        <div className="main">
          <h1 className="card-header">TOP DESTINATIONS</h1>
          <div className="home-city-container">
            {
              topDestinations && topDestinations.map((element, index) => (
                <Link key={index} to={`/destinations/${element.cityname}`} className="destinations">
                  <div className="destinations-text-box">
                    <label className="destinations-text">{element.cityname}</label>
                  </div>
                  <div className="destinations-image-box">
                    <img
                      src={element.details.places[0]?.url || ''}
                      className="destinations-image skeleton"
                      alt={element.cityname}
                    />
                  </div>
                </Link>
              ))
            }
          </div>
          <br />
          <Link to={'/destination'}>
            <label className="home-manycity">And Many More <FontAwesomeIcon icon={faRightLong} /></label>
          </Link>
        </div>
        <br /><br />
        <Socialhover />
        <Footer />
      </header>
    </>
  );
};

export default Page;




