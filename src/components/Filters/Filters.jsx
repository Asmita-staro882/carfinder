import React from "react";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter-group">
        <label>Price Range</label>
        <select>
          <option value="">Select Price Range</option>
          <option value="0-10000">0-10,000</option>
          <option value="10001-20000">10,001-20,000</option>
          <option value="20001-30000">20,001-30,000</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Brands</label>
        <select>
          <option value="">Select Brand</option>
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Model</label>
        <select>
          <option value="">Select Model</option>
          <option value="model1">Model 1</option>
          <option value="model2">Model 2</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Year</label>
        <select>
          <option value="">Select Year</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Owner</label>
        <select>
          <option value="">Select Owner</option>
          <option value="1">1 Owner</option>
          <option value="2">2 Owners</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Km Driven</label>
        <select>
          <option value="">Select Km Driven</option>
          <option value="0-5000">0-5,000</option>
          <option value="5001-10000">5,001-10,000</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Fuel</label>
        <select>
          <option value="">Select Fuel Type</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Transmission</label>
        <select>
          <option value="">Select Transmission</option>
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
