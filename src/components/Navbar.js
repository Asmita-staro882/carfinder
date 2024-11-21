import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import ProfileModal from "../components/ProfilePage/ProfileModal.jsx";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const openModal = (option) => {
    setSelectedOption(option);
    setModalVisible(true);
    setDropdownVisible(false);
  };

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
        <input
          type="text"
          className="search-bar"
          placeholder="Search by Brand"
        />
      </div>

      <div className="navbar-center">
        <Link to="/about">About</Link>
        <Link to="/howitworks">How it works</Link>
        <Link to="/wishlist" className="wishlist-icon">
          ❤️
        </Link>
        <div className="profile-container">
          <div className="profile-icon" onClick={toggleDropdown}>
            👤
          </div>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <button onClick={() => openModal("Dealer Login")}>
                Dealer Login
              </button>
              <button onClick={() => openModal("Login/Signup")}>
                Login/Signup
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-right">
        <p>Sell your car Directly to Customers</p>
        <button className="whatsapp-button">Chat with Us</button>
      </div>

      {modalVisible && (
        <ProfileModal
          option={selectedOption}
          onClose={() => setModalVisible(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
