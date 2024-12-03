import React from "react";
import Navbar from "../Navbar";
import CarTile from "../CarTile/CarTile";
import Filters from "../Filters/Filters.jsx";
import car1 from "../../assets/CarImage.png";
import "./BrowseCar.css";

const cars = [
  {
    name: "Tesla Model S",
    details: "Electric sedan with autopilot features.",
    price: "79999",
    imageUrl: car1, 
  },
  {
    name: "Tesla Model X",
    details: "Electric sedan with autopilot features.",
    price: "79999",
    imageUrl: car1, 
  },
  {
    name: "Tesla Model Y",
    details: "Electric sedan with autopilot features.",
    price: "79999",
    imageUrl: car1, 
  },
  {
    name: "Tesla Model Z",
    details: "Electric sedan with autopilot features.",
    price: "79999",
    imageUrl: car1, 
  },
  {
    name: "Tesla Model SS",
    details: "Electric sedan with autopilot features.",
    price: "79999",
    imageUrl: car1, 
  },
  {
    name: "Tesla Model SS",
    details: "Electric sedan with autopilot features.",
    price: "79999",
    imageUrl: car1, 
  },
  {
    name: "Tesla Model SS",
    details: "Electric sedan with autopilot features.",
    price: "79999",
    imageUrl: car1, 
  },
  {
    name: "Tesla Model SS",
    details: "Electric sedan with autopilot features.",
    price: "79999",
    imageUrl: car1, 
  },
  {
    name: "Tesla Model SS",
    details: "Electric sedan with autopilot features.",
    price: "79999",
    imageUrl: car1, 
  },
];

const BrowseCar = () => {
  return (
    <>
      <Navbar />
      <div className="browse-car-container">
        <Filters />
        <div className="car-list">
          {cars.map((car, index) => (
            <CarTile key={index} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BrowseCar;
