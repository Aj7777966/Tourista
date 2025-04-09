import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Include/Navbar";
import Footer from "../../Include/Footer";
import "../Destinationsdetail/Detail.css";
import Socialhover from "../../Include/socialhover";
import PricingCard from "../../Include/PricingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DestinationDetailPage() {
  const { destinationname } = useParams();
  const [destinationData, setDestinationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/destinations/${destinationname}`
        );
        const data = await response.json();
        setDestinationData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destination data:", error);
        setLoading(false);
      }
    };
    fetchDestination();
  }, [destinationname]);

  

  return (
    <>
      <Navbar />
      <Socialhover />
      <br />
      <br />
      <div className="destinationdetailpage-container">
        <div className="destinationdetailpage-box">
          {/* Destination Name */}
          <div className="destinationdetailpage-destination-name">
            <label className="destinationdetailpage-destination-name-label">
              {destinationData?.cityname || "City Name Not Available"}
            </label>
          </div>

          {/* Main Image */}
          <div className="destinationdetailpage-main-image-container">
            <div className="destinationdetailpage-main-image-box">
              {loading && <div className="skeleton-loader"></div>}
              <img  
                src={destinationData?.details?.places[0]?.url || ""}
                ref={imgRef}
                className="destinationdetailpage-main-image"
                alt="No Image Found"
                style={{ display: loading ? "none" : "block" }}
              />
            </div>
          </div>

          {/* Swiper for Tour Packages */}
          <div className="relative w-full max-w-6xl mx-auto">
            {destinationData?.tours?.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="w-full"
              >
                {destinationData.cityname.tours.map((plan, index) => (
                  <SwiperSlide key={index}>
                    <PricingCard
                      id={plan.id}
                      title={plan.title}
                      price={plan.price}
                      rating={plan.rating}
                      reviews={plan.reviews}
                      category={plan.category}
                      image={plan.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-center font-bold text-yellow-400 text-2xl">No Tour Packages Available Right now !</p>
            )}

            {/* Navigation Buttons */}
            <button className="custom-prev absolute top-1/2 -translate-y-1/2 left-[-3rem] z-10 text-4xl text-gray-600 hover:text-black transition-transform duration-200 hover:scale-110">
              ◀
            </button>
            <button className="custom-next absolute top-1/2 -translate-y-1/2 right-[-3rem] z-10 text-4xl text-gray-600 hover:text-black transition-transform duration-200 hover:scale-110">
              ▶
            </button>
          </div>

          {/* Places to Visit */}
          <div className="destinationdetailpage-places-label-box">
            <label className="destinationdetailpage-places-label">
              Places To Visit
            </label>
          </div>
          {destinationData?.details?.places?.length > 0 ? (
            destinationData.details.places.map((places, index) => (
              <div key={index} className="destinationdetailpage-places-container">
                <div className="main-div">
                  <div className="places-image-box skeleton">
                    <img
                      src={places.url}
                      className="places-image"
                      alt="No Image Found"
                      onLoad={() => setLoading(false)}
                      style={{
                        display: loading ? "none" : "block",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="places-detail-box">
                    <p className="places-detail-title">{places.name}</p>
                    <p className="places-detail">About: {places.about}</p>
                    <p className="places-detail">Address: {places.address}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center font-bold text-yellow-400 text-2xl">No Places to Visit Available</p>
          )}

          {/* Restaurants */}
          <div className="destinationdetailpage-food-label-box">
            <label className="destinationdetailpage-food-label">
              Popular Restaurants
            </label>
          </div>
          {destinationData?.details?.food?.length > 0 ? (
            destinationData.details.food.map((food, index) => (
              <div key={index} className="destinationdetailpage-food-container">
                <div className="main-div">
                  <div className="food-image-box skeleton">
                    <img
                      src={food.url}
                      className="food-image"
                      alt="No Image Found"
                      onLoad={() => setLoading(false)}
                      style={{
                        display: loading ? "none" : "block",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="food-detail-box">
                    <p className="food-detail-title">{food.name}</p>
                    <p className="food-detail">
                      Popular Dishes: {food.populardishes}
                    </p>
                    <p className="food-detail">Address: {food.address}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center font-bold text-yellow-400 text-2xl">No Popular Restaurants Available</p>
          )}

          {/* Hotels */}
          <div className="destinationdetailpage-hotel-label-box">
            <label className="destinationdetailpage-hotel-label">
              Best Hotels
            </label>
          </div>
          {destinationData?.details?.hotels?.length > 0 ? (
            destinationData.details.hotels.map((hotels, index) => (
              <div key={index} className="destinationdetailpage-hotel-container">
                <div className="main-div">
                  <div className="hotel-image-box">
                    <img
                      src={hotels.url}
                      className="hotel-image"
                      alt="No Image Found"
                      onLoad={() => setLoading(false)}
                      style={{
                        display: loading ? "none" : "block",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="hotel-detail-box">
                    <p className="hotel-detail-title">{hotels.name}</p>
                    <p className="hotel-detail">About: {hotels.about}</p>
                    <p className="hotel-detail">Address: {hotels.address}</p>
                    <p className="hotel-detail">Ratings: {hotels.rating}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center font-bold text-yellow-400 text-2xl">No Hotels Available</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}




