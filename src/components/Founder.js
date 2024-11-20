import React from 'react';
import './Founder.css';
import founder from "../images/founder.png"

const Founder = () => {
  return (
    <div className="founder-speak">
      <div className="founder-image">
        <img
          src={founder}
        />
      </div>
      <div className="founder-content">
        <h2>FOUNDER SPEAK</h2>
        <p>
          Welcome to <a href="https://carfinder.co.in">carfinder.co.in</a>! At CarFinder, we believe that
          buying and selling cars should be a straightforward and transparent experience. This platform
          is inspired by my 20 years of experience in the Automobile Industry.
        </p>
        <p>
          As the founder of this platform, my goal is to simplify your journey through the automotive
          marketplace. I understand that purchasing or selling a vehicle is a significant decision,
          and we're here to make it as seamless and stress-free as possible. Our team is committed to
          offering a user-friendly platform where you can explore a diverse range of vehicles and
          connect directly with buyers and sellers. Thank you for choosing <a href="https://carfinder.co.in">carfinder.co.in</a>.
        </p>
        <p>
          We look forward to helping you find the perfect car or reach the right buyer. For any
          questions or support, please feel free to email us at <a href="mailto:support@carfinder.co.in">support@carfinder.co.in</a>.
        </p>
        <p><strong>Vasim Khan</strong><br />Founder & CEO<br /><a href="https://carfinder.co.in">carfinder.co.in</a></p>
        <div className="social-links">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Founder;
