import React from "react";
import "./CarTile.css";

const CarTile = ({ car }) => {
  return (
    <div className="car-tile">
      <div className="car-image-container">
        <img src={car.imageUrl} alt={car.name} className="car-image" />
      </div>
      <div className="car-details">
        <h3 className="car-name">{car.name}</h3>
        <p className="car-details-text">{car.details}</p>
        <span className="car-price">${car.price}</span>
        <button className="view-details-button">View Details</button>
      </div>
    </div>
  );
};

export default CarTile;
