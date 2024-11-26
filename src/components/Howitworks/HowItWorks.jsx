import React from "react";
import BuyCar from "./BuyCar.js";
import CarFinderWorks from "./CarFinderWorks.js";
import ServiceHistory from "./ServiceHistory.js";
import Navbar from "../Navbar.js";

const HowItWorks = () => {
  return (
    <div>
      <Navbar />
      <CarFinderWorks />
      <BuyCar />
      <ServiceHistory />
    </div>
  );
};

export default HowItWorks;
