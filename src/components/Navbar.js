import React from 'react';
import { Link } from "react-router-dom"; 
import "./Navbar.css"; 
import logo from '../images/logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
     
      <div className="navbar-left">
     
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Carfinder" /> 
          </Link>
        </div>
        
        <select className="city-select">
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
        </select>
    
        <input type="text" className="search-bar" placeholder="Search by Brand" /> {/* Added search bar */}
      </div>

     
      <div className="navbar-center">
        <Link to="/about">About</Link> 
        <Link to="/howitworks">How it works</Link> 
        <Link to="/wishlist" className="wishlist-icon">❤️</Link> 
        <Link to="/profile" className="profile-icon">👤</Link> 
      </div>

      <div className="navbar-right">
        <p>Sell your car Directly to Customers</p> 
        <button className="whatsapp-button">Chat with Us</button> 
      </div>
    </nav>
  );
};

export default Navbar;
