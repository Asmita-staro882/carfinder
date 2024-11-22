import React from "react";
import Navbar from "../Navbar.js";
import IntermediateSection from "../Intermediate.js";
import HeroSection from "../HeroSection.js";
import CarList from "../CarList.js";
import FeaturedCarsSection from "../FeaturedCar.js";
import WhyUse from "../WhyUse.js";
import BrandSection from "../Brands.js";
import Founder from "../Founder.js";
import BlogCarousel from "../Blog.js";
import FAQ from "../Faq.js";
import Footer from "../Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <IntermediateSection />
      <HeroSection />
      <CarList />
      <FeaturedCarsSection />
      <WhyUse />
      <BrandSection /> `
      <Founder />
      <BlogCarousel />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
