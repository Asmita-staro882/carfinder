import React from "react";
import "./BrowseCars.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../images/img1.jpg";

const BrowseCar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/used-car");
  };
  return (
    <div className="browse-cars-section">
      <div className="browse-cars-content">
        <div className="browse-cars-left">
          <img src={img1} alt="Car showcase" className="browse-cars-image" />
        </div>
        <div className="browse-cars-right">
          <h2>Experience a Hassle-Free Car Buying Journey</h2>
          <p>
            Our platform is designed to simplify your car buying and selling
            journey. We offer access to a diverse range of vehicles and
            motivated buyers and sellers. Whether you’re looking to find the
            perfect ride or get a great deal on your current car, CarFinder
            ensures a seamless, transparent experience.
          </p>
          <button onClick={handleClick} className="browse-cars-button">
            Browse Cars ➔
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseCar;
