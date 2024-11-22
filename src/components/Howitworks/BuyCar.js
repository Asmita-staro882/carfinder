import React from "react";
import "./BuyCarSection.css";
import img1 from "../../images/buycar1.jpg";
import img2 from "../../images/buycar2.jpg";
import img3 from "../../images/buycar3.jpg";
import img4 from "../../images/buycar4.jpg";
import img5 from "../../images/buycar5.jpg";
import img6 from "../../images/buycar6.jpg";

const cardData = [
  {
    title: "Discover Your Next Ride with Ease",
    description: "Explore the vast selection of used cars online in India with carfinder.co.in.",
    image: img1,
  },
  {
    title: "Sell Your Car Hassle-Free",
    description: "Simply provide your car's details, upload pictures, and reach buyers directly.",
    image: img2,
  },
  {
    title: "Explore Exclusive Collection of Luxury Cars",
    description: "Indulge in pre-owned luxury cars like BMW, Audi, and Mercedes at carfinder.co.in.",
    image: img3,
  },
  {
    title: "Your Ultimate Source for Pre-Owned Cars",
    description: "Each listing comes with accurate RTO data for confident purchases.",
    image: img4,
  },
  {
    title: "Simplify Your Search",
    description: "Experience a perfect blend of convenience and choice for buying used cars.",
    image: img5,
  },
  {
    title: "Carfinder: Service History & Loans",
    description: "Access personalized assistance for loans, insurance, and vehicle history reports.",
    image: img6,
  },
];

const BuyCarSection = () => {
  return (
    <div className="buy-car-section">
      <h2 className="section-title">Buy Your Car With carfinder.co.in</h2>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCarSection;
