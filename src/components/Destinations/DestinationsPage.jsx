import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Include/Navbar";
import Footer from "../../Include/Footer";
import "../Destinations/Destinations.css";
import Socialhover from "../../Include/socialhover";

const DestinationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);


  
  // Fetch data from MongoDB
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/destinations");
        const data = await response.json();
        setDestinations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };
    fetchDestinations();
  }, []);





  // Fetch data from MongoDB dynamically based on search
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/destinations?search=${searchTerm}`);
        const data = await response.json();
        setDestinations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };
    fetchDestinations();
  }, [searchTerm]); // Re-run API call when searchTerm changes




  // Filter destinations based on search
  const filteredDestinations = destinations.filter((item) =>
    item.cityname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Socialhover />
      <br />
      <br />
      <div className="destinations-container">
        <div className="destinations-box">
          <p className="destinations-box-paragraph">
            Search for your dream destination from 70+ destinations across India
          </p>
          <div className="destinations-box-searchbar-container">
            <input
              type="text"
              className="searchbar-textbox"
              placeholder="Search Here"
              spellCheck="false"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)} 
            />
          </div>

          { filteredDestinations.length > 0 ? (
            <div className="destinations-details-container">
              {filteredDestinations.map((element, index) => (
                <Link key={index} to={`/destinations/${element.cityname}`} className="destinations">
                  <div className="destinations-text-box">
                    <label className="destinations-text">{element.cityname}</label>
                  </div>
                  <div className="destinations-image-box skeleton">
                    {element.details.places[0]?.url ? (
                      <img src={element.details.places[0].url} className="destinations-image" alt={element.cityname} />
                    ) : (
                      <p>No Image Available</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <h2>No destinations found</h2>
          )}
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default DestinationsPage;




