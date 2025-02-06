import React, { useEffect } from 'react'
import Navbar from '../../Include/Navbar'
import Map from '../Map/Map'
import Footer from '../../Include/Footer'
const Mapmain = (location) => {
  const { scrollPosition } = location.state || { scrollPosition: 0 };
  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);
  const cities = [
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Delhi', lat: 28.7041, lng: 77.1025 },
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
    { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
    { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
    { name: 'Kolkata', lat: 22.5726, lng: 88.3639 },
  ];
  return (
    <div>
      <Navbar />
      <div style={{ height: '100vh', width: '100%' }}>
        <Map cities={cities} />
      </div>
      <Footer />
    </div>
  )
}

export default Mapmain