import React from "react";
import "./CarTile.css";

const CarTile = ({ car }) => {
  return (
    <div className="car-tile">
      <div className="cartile-image-container">
        <img src={car.imageUrl} alt={car.name} className="cartile-image" />
      </div>
      <div className="cartile-details">
        <h3 className="cartile-name">{car.name}</h3>
        <p className="cartile-details-text">{car.details}</p>
        <span className="cartile-price">${car.price}</span>
        <button className="view-details-button">View Details</button>
      </div>
    </div>
  );
};

export default CarTile;
