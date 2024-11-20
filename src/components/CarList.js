import React from 'react';
import './CarList.css';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img3 from '../images/img3.jpg';

const CarListSection = () => {
  const tabs = ['Buy Car', 'Sell Car', 'Direct Customer Car', 'Dealers Cars', 'Post Requirement'];
  const cars = [
    {
      image: img4,
      name: 'BMW 523i',
      details: '67,000 Km | 2nd Owner | Petrol | 2011',
      price: '₹ 10.50 Lakh',
    },
    {
      image: img5,
      name: 'CRETA 1.6 CRDI SX',
      details: '115,000 Km | 1st Owner | Diesel | 2015',
      price: '₹ 7.00 Lakh',
    },
    {
      image: img6,
      name: 'INNOVA CRYSTA 2.4 Z',
      details: '166,000 Km | 1st Owner | Diesel | 2020',
      price: '₹ 16.75 Lakh',
    },
    {
      image: img3,
      name: 'VOLVO S60 D4',
      details: '65,000 Km | 2nd Owner | Diesel | 2018',
      price: '₹ 16.00 Lakh',
    },
    {
        image: img4,
        name: 'VOLVO S60 D4',
        details: '65,000 Km | 2nd Owner | Diesel | 2018',
        price: '₹ 16.00 Lakh',
      },
      {
        image: img5,
        name: 'VOLVO S60 D4',
        details: '65,000 Km | 2nd Owner | Diesel | 2018',
        price: '₹ 16.00 Lakh',
      },
    
  ];

  return (
    <div className="car-list-container">
     
      <div className="tabs-section">
        {tabs.map((tab, index) => (
          <button key={index} className={`tab-button ${index === 0 ? 'active-tab' : ''}`}>
            {tab}
          </button>
        ))}
      </div>

      
      <div className="car-list-wrapper">
      
        <div className="car-list">
          {cars.map((car, index) => (
            <div key={index} className="car-card">
              <img src={car.image} alt={car.name} className="car-image" />
              <h3 className="car-name">{car.name}</h3>
              <p className="car-details">{car.details}</p>
              <p className="car-price">{car.price}</p>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default CarListSection;
