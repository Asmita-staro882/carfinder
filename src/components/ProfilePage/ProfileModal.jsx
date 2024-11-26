import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileModal.css";

const ProfileModal = ({ option, onClose }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const sendOtp = () => {
    if (phone) {
      setOtpSent(true);
      alert("OTP sent!"); // Simulated OTP
    } else {
      alert("Please enter your mobile number.");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Add this for debugging
      if (response.ok) {
        alert("OTP verified successfully!");
        navigate("/used-car");
        onClose();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        {!otpSent ? (
          <>
            <h3>{option}</h3>
            <input
              type="text"
              placeholder="Enter mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={sendOtp}>Get OTP</button>
          </>
        ) : (
          <>
            <h3>Verify OTP</h3>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOtp}>Verify</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;
