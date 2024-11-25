import React from "react";
import "./ServiceHistory.css";

const ServiceHistory = () => {
  return (
    <div className="service-history-section">
      <div className="service-background">
        <div className="service-overlay">
          <div className="history-text">
            <h2>Get Service History of Any Car</h2>
          </div>
          <div className="history-form">
            <input
              type="text"
              placeholder="Enter 10-digit phone number"
              className="phone-input"
            />
            <button className="request-button">Request a Call Back</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceHistory;
