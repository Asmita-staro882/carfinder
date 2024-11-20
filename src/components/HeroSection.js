import React from "react";
import Slider from "react-slick";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="hero-section">
      <Slider {...settings} className="hero-slider">
        <div className="slider-item">
          <img src={img1} alt="Car 1" />
        </div>
        <div className="slider-item">
          <img src={img2} alt="Car 2" />
        </div>
        <div className="slider-item">
          <img src={img3} alt="Car 2" />
        </div>
        
        
      </Slider>
      <div className="hero-text">
        <h1>Buy & Sell <br /> Pre-Owned Cars with Ease.</h1>
      </div>
    </div>
  );
};

export default HeroSection;
