import React, { useEffect } from "react";
import Navbar from "../../Include/Navbar.jsx";
import DestinationDetail from "../Destinationsdetail/Destinationdetailpage.jsx";

const DestinationDetailMain = ({ location }) => {
  const scrollPosition = location?.state?.scrollPosition || 0;

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <div>
      <Navbar />
      <DestinationDetail />
    </div>
  );
};

export default DestinationDetailMain;
