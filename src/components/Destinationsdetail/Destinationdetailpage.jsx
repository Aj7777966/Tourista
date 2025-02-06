import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data';
import Navbar from "../../Include/Navbar"
import Footer from '../../Include/Footer';
export default function Destinationdetail() {
  const { destinationname } = useParams();
  const results = data.filter(item =>
    item.city.cityname.toLowerCase().includes(destinationname.toLowerCase())
  );
  // console.log(results);
  return (
    <>
     <Navbar/>
     <br/><br/>
    <div className="destinationdetailpage-container">
      <div className="destinationdetailpage-box">
        
          <div className="destinationdetailpage-destination-name">
              <label className="destinationdetailpage-destination-name-label">{results[0].city.cityname}</label>
            </div><div className="destinationdetailpage-main-image-container">
                <div className="destinationdetailpage-main-image-box">
                  <img src={results[0].city.details.places[0].url} className="destinationdetailpage-main-image" alt="No Image Found"/>
                </div>
              </div><div className="destinationdetailpage-places-label-box">
                <label className="destinationdetailpage-places-label">Places To Visit</label>
              </div>
              {
              data && results[0].city.details.places.map((places) => {
                return <>
              <div className="destinationdetailpage-places-container">
                <div className="destinationdetailpage-places-box">
                  <div className="places-image-box">
                    <img src={places.url} className="places-image" alt="No Image Found"/>
                  </div>
                  <div className="places-detail-box">
                    <p className="places-detail-title">{places.name}</p>
                    <div className="places-detail-p-box">
                    <p className="places-detail">About : {places.about}</p>
                    <p className="places-detail">Address : {places.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              </>
          })
        }
              <div className="destinationdetailpage-food-label-box">
                <label className="destinationdetailpage-food-label">Popular Restaurants</label>
              </div>
              {
                data && results[0].city.details.food.map((food) => {
                  return <>
                  <div className="destinationdetailpage-food-container">
                <div className="destinationdetailpage-food-box">
                  <div className="food-image-box">
                    <img src={food.url} className="food-image" alt="No Image Found"/>
                  </div>
                  <div className="food-detail-box">
                    <p className="food-detail-title">{food.name}</p>
                    <div className="food-detail-p-box">
                    <p className="food-detail">Popular Dishes : {food.populardishes}</p>
                    <p className="food-detail">Address : {food.address}</p>
                    </div>
                  </div>
                </div>
              </div>
                  </>
                })
              }
              <div className="destinationdetailpage-hotel-label-box">
                <label className="destinationdetailpage-hotel-label">Best Hotels</label>
              </div>
              {
                data && results[0].city.details.hotels.map((hotels) => {
                  return <>
                    <div className="destinationdetailpage-hotel-container">
                <div className="destinationdetailpage-hotel-box">
                  <div className="hotel-image-box">
                    <img src={hotels.url} className="hotel-image" alt="No Image Found"/>
                  </div>
                  <div className="hotel-detail-box">
                  <p className="hotel-detail-title">{hotels.name}</p>
                  <div className="hotels-detail-p-box">
                  <p className="hotel-detail">About : {hotels.about}</p>
                    <p className="hotel-detail">Address : {hotels.address}</p>
                    <p className="hotel-detail">Ratings : {hotels.rating}</p>
                  </div>
                  </div>
                </div>
              </div>
              <br/><br/>
                  </>
                })
              }
      
      </div>
    </div>
    <Footer/>
              </>
  )
}