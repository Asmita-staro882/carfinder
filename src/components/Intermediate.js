import React from 'react';
import './Intermediate.css';

const IntermediateSection = () => {
  return (
    <div className="intermediate-section">
      
        <label>EXPLORE <br /> WITH</label>
      
      <div className="dropdown">
        <select>
          <option>USED CAR</option>
          
        </select>
      </div>
      <div className="dropdown">
        <select>
          <option>PRICE RANGE</option>
          <option>₹0 - ₹5 Lakh</option>
          <option>₹5 - ₹10 Lakh</option>s
          <option>₹10 - ₹20 Lakh</option>
          <option>Above ₹20 Lakh</option>
        </select>
      </div>
      <div className="dropdown">
        <select>
          <option>FUEL</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Electric</option>
        </select>
      </div>
      <div className="dropdown">
        <select>
          <option>YEAR</option>
          <option>2015 - 2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
      <div className="dropdown">
        <select>
          <option>KM DRIVEN</option>
          <option>0 - 20,000</option>
          <option>20,000 - 50,000</option>
          <option>50,000+</option>
        </select>
      </div>
      
        <label>EXPLORE <br /> REQUIREMENTS</label>
     
      
        <label>ALL <br /> DEALERS</label>
      
    </div>
  );
};

export default IntermediateSection;
