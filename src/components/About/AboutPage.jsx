import React from "react";
import AboutHeader from "./AboutHeader.js";
import BrowseCar from "./BrowseCar.js";
import Customer from "./Customer.js";
import Goal from "./Goal.js";
import Navbar from "../Navbar.js";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <BrowseCar />
      <Customer />
      <Goal />
    </div>
  );
};

export default AboutPage;
