import React from "react";
import BuyCar from "./BuyCar.js";
import CarFinderWorks from "./CarFinderWorks.js";
import ServiceHistory from "./ServiceHistory.js";
import Navbar from "../Navbar.js";
import Footer from "../Footer.jsx";

const HowItWorks = () => {
  return (
    <div>
      <Navbar />
      <CarFinderWorks />
      <BuyCar />
      <ServiceHistory />
      <Footer />
    </div>
  );
};

export default HowItWorks;
