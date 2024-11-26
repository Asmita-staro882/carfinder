import React from "react";

const FilterOption = ({ id, name, label }) => {
  return (
    <div className="filter-option">
      <input type="checkbox" id={id} name={name} value={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FilterOption;
