import React from "react";
import FilterOption from "../FilterOption/FilterOption";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <h2>Filters</h2>

      <div className="filter-group">
        <h3>Price Range</h3>
        <FilterOption id="under5lac" name="price" label="Under 5 Lac" />
        <FilterOption id="5to10lac" name="price" label="5-10 Lac" />
        <FilterOption id="10to20lac" name="price" label="10-20 Lac" />
        <FilterOption id="20to30lac" name="price" label="20-30 Lac" />
        <FilterOption id="30lac+" name="price" label="30 Lac+" />
      </div>

      <div className="filter-group">
        <h3>Brands</h3>
        <FilterOption id="brand1" name="brand" label="Brand 1" />
        <FilterOption id="brand2" name="brand" label="Brand 2" />
      </div>

      <div className="filter-group">
        <h3>Model</h3>
        <FilterOption id="model1" name="model" label="Model 1" />
        <FilterOption id="model2" name="model" label="Model 2" />
      </div>

      <div className="filter-group">
        <h3>Year</h3>
        <FilterOption id="2023" name="year" label="2023" />
        <FilterOption id="2022" name="year" label="2022" />
      </div>

      <div className="filter-group">
        <h3>Owner</h3>
        <FilterOption id="1owner" name="owner" label="1st Owner" />
        <FilterOption id="2owners" name="owner" label="2nd Owner" />
        <FilterOption id="2owners" name="owner" label="3rd Owner" />
      </div>

      <div className="filter-group">
        <h3>Km Driven</h3>
        <FilterOption id="0to50000" name="kmDriven" label="0-50000" />
        <FilterOption id="50001to70000" name="kmDriven" label="50000-70000" />
        <FilterOption id="70000to100000" name="kmDriven" label="70000-100000" />
      </div>

      <div className="filter-group">
        <h3>Fuel</h3>
        <FilterOption id="petrol" name="fuel" label="Petrol" />
        <FilterOption id="diesel" name="fuel" label="Diesel" />
        <FilterOption id="hybrid" name="fuel" label="Hybird" />
        <FilterOption id="electric" name="fuel" label="Electric" />
      </div>

      <div className="filter-group">
        <h3>Transmission</h3>
        <FilterOption id="manual" name="transmission" label="Manual" />
        <FilterOption id="automatic" name="transmission" label="Automatic" />
      </div>
    </div>
  );
};

export default Filters;
