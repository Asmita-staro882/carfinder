import React, { useState } from 'react';
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img3 from "../images/img3.jpg"
import "./FeaturedCars.css"


const FeaturedCarsSection = () => {
  const [selectedTab, setSelectedTab] = useState('popular');

  const cars = {
    popular: [
      { image: img4, name: 'BMW 523i', details: '67,000 Km | 2nd Owner | Petrol | 2011', price: '₹ 10.50 Lakh' },
      { image: img5, name: 'CRETA 1.6 CRDI SX', details: '115,000 Km | 1st Owner | Diesel | 2015', price: '₹ 7.00 Lakh' },
      { image: img6, name: 'INNOVA CRYSTA 2.4 Z', details: '166,000 Km | 1st Owner | Diesel | 2020', price: '₹ 16.75 Lakh' },
      { image: img3, name: 'VOLVO S60 D4', details: '65,000 Km | 2nd Owner | Diesel | 2018', price: '₹ 16.00 Lakh' },
      { image: img4, name: 'VOLVO S60 D4', details: '65,000 Km | 2nd Owner | Diesel | 2018', price: '₹ 16.00 Lakh' },
      
    ],
    new: [
      { image: img3, name: 'VOLVO S60 D4', details: '65,000 Km | 2nd Owner | Diesel | 2018', price: '₹ 16.00 Lakh' },
      { image: img4, name: 'VOLVO S60 D4', details: '65,000 Km | 2nd Owner | Diesel | 2018', price: '₹ 16.00 Lakh' },
      { image: img5, name: 'VOLVO S60 D4', details: '65,000 Km | 2nd Owner | Diesel | 2018', price: '₹ 16.00 Lakh' },
      { image: img4, name: 'BMW 523i', details: '67,000 Km | 2nd Owner | Petrol | 2011', price: '₹ 10.50 Lakh' },
      { image: img5, name: 'CRETA 1.6 CRDI SX', details: '115,000 Km | 1st Owner | Diesel | 2015', price: '₹ 7.00 Lakh' },
      { image: img6, name: 'INNOVA CRYSTA 2.4 Z', details: '166,000 Km | 1st Owner | Diesel | 2020', price: '₹ 16.75 Lakh' },
      
      
    ]
  };

  return (
    <div className="featured-cars-section">
      <h2>Featured Cars</h2>
      
      <div className="tabs-section">
        <button
          className={`tab-button ${selectedTab === 'popular' ? 'active' : ''}`}
          onClick={() => setSelectedTab('popular')}
        >
          Popular Cars
        </button>
        <button
          className={`tab-button ${selectedTab === 'new' ? 'active' : ''}`}
          onClick={() => setSelectedTab('new')}
        >
          Newly Added
        </button>
      </div>
     <div className="featured-car-wrapper">
      <div className="featured-car-list">
        {cars[selectedTab].map((car, index) => (
          <div key={index} className="featured-car-card">
            <img src={car.image} alt={car.name} className="featured-car-image" />
            <h3 className="featured-car-name">{car.name}</h3>
            <p className="featured-car-details">{car.details}</p>
            <p className="featured-car-price">{car.price}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarsSection;
