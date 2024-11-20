import React from 'react';
import suzuki from "../images/suzuki.png"
import tata from "../images/tata.png"
import toyota from "../images/toyota.jpg"
import mahindra from "../images/mahindra.jpg"
import bmw from "../images/bmw.png"
import kia from "../images/kia.png"
import mercedes from "../images/mercedes.jpg"
import audi from "../images/audi.png"
import mg from "../images/mg.png"
import "./Brands.css"



const PopularBrands = () => {
  return (
    <div className="brands-container">
      <h2 className="brands-heading">Explore Popular Brands</h2>
      <div className="brands-grid">
        <div className="brand-card">
          <img className="brand-logo" src={suzuki} alt="Suzuki" />
        </div>
        <div className="brand-card">
          <img className="brand-logo" src={tata} alt="Tata" />
        </div>
        <div className="brand-card">
          <img className="brand-logo" src={toyota} alt="Toyota" />
        </div>
        <div className="brand-card">
          <img className="brand-logo" src={mahindra} alt="Mahindra" />
        </div>
        <div className="brand-card">
          <img className="brand-logo" src={bmw} alt="BMW" />
        </div>
        <div className="brand-card">
          <img className="brand-logo" src={kia} alt="Kia" />
        </div>
        <div className="brand-card">
          <img className="brand-logo" src={mercedes} alt="Mercedes" />
        </div>
        <div className="brand-card">
          <img className="brand-logo" src={audi} alt="Audi" />
        </div>
        <div className="brand-card">
          <img className="brand-logo" src={mg} alt="MG" />
        </div>
      </div>
      <div className="view-all-container">
        <a href="#" className="view-all-button">
          View All Brands <span className="arrow-icon">→</span>
        </a>
      </div>
    </div>
  );
};

export default PopularBrands;
