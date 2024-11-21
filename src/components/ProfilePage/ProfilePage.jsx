import React, { useState } from "react";
import "./ProfilePage.css";
import Navbar from "../Navbar";

const ProfilePage = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    console.log("Profile saved:", { fullName, phoneNumber, email });
  };

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <aside className="sidebar">
          <div className="profile-welcome">Welcome Back</div>
          <nav>
            <ul>
              <li>General info</li>
              <li>Sell Request</li>
              <li>Shortlisted Car</li>
              <li>Posted Car</li>
              <li>Buy Requirement</li>
              <li>Terms & Privacy</li>
              <li>Log Out</li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <div className="profile-header">
            <span>Last Active: November 18th 2024, 4:25:34 pm</span>
            <a href="#">Last Viewed Car</a>
          </div>
          <div className="profile-photo">
            <img src="avatar.png" alt="Profile Avatar" />
            <button>Upload Profile Photo</button>
          </div>
          <form className="profile-form">
            <label>
              Full Name
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
              />
            </label>
            <label>
              Phone Number
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="9079109772"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="eg.abc@gmail.com"
              />
            </label>
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default ProfilePage;
