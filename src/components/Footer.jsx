import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import "./Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Logo Section */}
        <div>
          <img src={logo} alt="Car Finder Logo" />
          <p>
            carfinder.co.in connects buyers and sellers directly, offering detailed service
            history (on request) and the ability to post specific requirements for a tailored
            car buying and selling experience.
          </p>
          <button>
            <FaPhone /> 7417755568
          </button>
        </div>

        {/* Links Section */}
        <div>
          <h4>About Us</h4>
          <ul>
            <li>Who we are</li>
            <li>Blogs</li>
            <li>How it works</li>
            <li>Customer Reviews</li>
            <li>Partner with us</li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
          </ul>
        </div>
        <div>
          <h4>Resources and Tools</h4>
          <ul>
            <li>Contact Us</li>
            <li>Quick Order</li>
            <li>Saved Carts</li>
            <li>Video Library</li>
          </ul>
        </div>

        {/* Feedback and Social Section */}
        <div>
          <h4>Feedback</h4>
          <p>Share your experience with us and help us improve.</p>
          <div className="social-links">
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <hr />

      {/* Newsletter Section */}
      <div className="newsletter">
        <h4>Subscribe to our Newsletter</h4>
        <p>A monthly digest of the latest news, articles, and resources.</p>
        <div>
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <hr />

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>This website is owned by MAVRICKMOTO FINDER SOLUTIONS PRIVATE LIMITED.</p>
        <p>© 2024 Car Finder. All rights reserved. Crafted with ❤️ by Cybertize Technologies Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
