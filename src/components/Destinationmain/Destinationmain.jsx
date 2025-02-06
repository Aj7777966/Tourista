import React, { useEffect } from "react";
import Navbar from "../components/Navbar.js";
import Destinations from "../Destinations/DestinationsPage.jsx";
import Footer from "../components/Footer.js";

const DestinationsMain = ({ location }) => {
  const scrollPosition = location?.state?.scrollPosition || 0;

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <div>
      <Navbar />
      <Destinations />
      <Footer />
    </div>
  );
};

export default DestinationsMain;
