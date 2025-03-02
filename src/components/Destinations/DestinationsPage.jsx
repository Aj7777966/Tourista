import React, { useEffect, useState } from "react";
import data from "../../Data";
import { Link } from "react-router-dom";
import Navbar from "../../Include/Navbar";
import Footer from "../../Include/Footer";
import "../Destinations/Destinations.css";

const DestinationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  useEffect(() => {
    if (searchTerm) {
      const results = data.filter((item) =>
        item.city?.cityname?.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
      setSearchResults(results);
    } else {
      setSearchResults(data);
    }
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="destinations-container">
        <div className="destinations-box">
          <div className="destinations-box-paragraph">
            <p className="destination-top-text">Search for your dream destination from 70+ destinations across India</p>
          </div>
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
          <div className="destinations-details-container">
            {searchResults.length > 0 ? (
              searchResults.map((element, index) => (
                <Link key={index} to={`/destinations/${element.city.cityname}`} className="destinations">
                  <div className="destinations-text-box">
                    <label className="destinations-text">{element.city.cityname}</label>
                  </div>
                  <div className="destinations-image-box skeleton">
                    {element.city.details.places[0]?.url ? (
                      <img src={element.city.details.places[0].url} className="destinations-image" alt={element.city.cityname} />
                    ) : (
                      <p>No Image Available</p>
                    )}
                  </div>
                </Link>
              ))
            ) : (
              <h2>No destinations found</h2>
            )}
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default DestinationsPage;
