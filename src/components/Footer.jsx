import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import "./Footer.css"
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", padding: "2rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {/* Logo Section */}
        <div style={{ flex: "1 1 300px", marginBottom: "1rem" }}>
          <img src={logo} alt="Car Finder Logo" style={{ maxWidth: "150px" }} />
          <p style={{ marginTop: "1rem" }}>
            carfinder.co.in connects buyers and sellers directly, offering detailed service
            history (on request) and the ability to post specific requirements for a tailored
            car buying and selling experience.
          </p>
          <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "#000", color: "#fff", border: "1px solid #fff" }}>
            <FaPhone /> 7417755568
          </button>
        </div>

        {/* Links Section */}
        <div style={{ flex: "1 1 300px", marginBottom: "1rem" }}>
          <h4>About Us</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Who we are</li>
            <li>Blogs</li>
            <li>How it works</li>
            <li>Customer Reviews</li>
            <li>Partner with us</li>
          </ul>
        </div>
        <div style={{ flex: "1 1 300px", marginBottom: "1rem" }}>
          <h4>Help</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
          </ul>
        </div>
        <div style={{ flex: "1 1 300px", marginBottom: "1rem" }}>
          <h4>Resource and Tools</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Contact Us</li>
            <li>Quick Order</li>
            <li>Saved Carts</li>
            <li>Video Library</li>
          </ul>
        </div>

        {/* Feedback and Social Section */}
        <div style={{ flex: "1 1 300px", marginBottom: "1rem" }}>
          <h4>Feedback</h4>
          <p>Share your experience with us and help us improve.</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <hr style={{ borderColor: "#fff", margin: "1rem 0" }} />

      {/* Newsletter Section */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h4>Subscribe to our Newsletter</h4>
        <p>A monthly digest of the latest news, articles, and resources.</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
          <input type="email" placeholder="Email address" style={{ padding: "0.5rem", width: "250px" }} />
          <button style={{ padding: "0.5rem 1rem", background: "#fff", color: "#000", border: "none" }}>Subscribe</button>
        </div>
      </div>

      <hr style={{ borderColor: "#fff" }} />

      {/* Footer Bottom */}
      <div style={{ textAlign: "center", fontSize: "0.8rem" }}>
        <p>
          This website is owned MAVRICKMOTO FINDER SOLUTIONS PRIVATE LIMITED.
        </p>
        <p>
          © 2024 Car Finder. All rights reserved. Crafted with ❤️ by Cybertize Technologies Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
