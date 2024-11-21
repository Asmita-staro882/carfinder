import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileModal.css";

const ProfileModal = ({ option, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("Buyer"); // Default to Buyer
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const sendOtp = () => {
    if (name && email && phone) {
      setOtpSent(true);
      alert("OTP sent: 1234"); // Simulated OTP
    } else {
      alert("Please fill all the fields.");
    }
  };

  const verifyOtp = async () => {
    if (otp === "1234") {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone, userType, otp }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          alert(`${option} successful`);
          navigate(userType === "Dealer" ? "/dealer" : "/user");
          onClose();
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }
    } else {
      alert("Invalid OTP");
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
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="Buyer">Buyer</option>
              <option value="Dealer">Dealer</option>
            </select>
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
