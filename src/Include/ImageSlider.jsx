import React, { useState, useEffect } from "react";
import "../assets/App1.css";

const slides = [
  {
    image: "https://dl.dropbox.com/scl/fi/fe47571tivrix8851efkh/beach-2084350_1920-1-1.jpg?rlkey=fnkz6s1jyu3hjh59702lrdh37&st=nh77zf9u&dl=0",
    title: "ABOUT US",
    description: "Welcome to Tourista, your ultimate travel companion for exploring the hidden gems and iconic destinations of India! At Tourista, we believe that every journey tells a story, and our mission is to help you create unforgettable memories. With a focus on showcasing the best of Indian cities, we bring you an all-in-one platform to discover, plan, and enjoy your travels with ease."
  },
  {
    image: "https://dl.dropbox.com/scl/fi/mu860onjj025az2b3oewt/camping-3893587_1920-1-1.jpg?rlkey=qyh12h1c66sp4h014uk7axn2e&st=tgel3b0f&dl=0",
    description: "India is a land of diversity, where every state offers a unique blend of culture, history, nature, and modernity. At Tourista, we’ve meticulously curated a list of the top 5 cities from every state, highlighting the must-visit places, finest resorts and hotels, local delicacies, and convenient transport options. Whether you’re a solo traveler, a family explorer, or an adventure seeker, Tourista is here to make your travel dreams a reality."
  },
  {
    image: "https://dl.dropbox.com/scl/fi/ompby6n9jot0dz3zkezjq/mountain-3800239_1920-1.jpg?rlkey=hm6d5gjstnqmorizew5k60mx0&st=q6qwt1ns&dl=0",
    description: "At Tourista, we also celebrate the food, art, and stories that define each destination. Indulge in the finest cuisines, explore historical landmarks, and discover hidden treasures that only locals know. Our vision is to bring you closer to the soul of every city you visit, ensuring that your journey is not just a trip but a cherished experience."
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : "fade"}`}
          style={{ display: index === currentIndex ? "block" : "none" }}
        >
          <img className="slide-image" src={slide.image} alt="Slide" />
          <div className="slide-content">
            {slide.title && <h3 className="slide-title">{slide.title}</h3>}
            <p className="slide-desc">{slide.description}</p>
          </div>
        </div>
      ))}

      

      {/* Dots Navigation */}
      <div className="dot-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
