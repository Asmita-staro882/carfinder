import React from "react";
import AboutHeader from "./AboutHeader.js";
import BrowseCar from "./BrowseCar.js";
import Customer from "./Customer.js";
import Goal from "./Goal.js";
import Navbar from "../Navbar.js";
import Footer from "../Footer.jsx"


const AboutPage = () => {
  return (
    <div>
      <Navbar />
      
      <AboutHeader />
      <BrowseCar />
      <Customer />
      <Goal />
      <Footer />
    </div>
  );
};

export default AboutPage;
