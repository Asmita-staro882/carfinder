import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import IntermediateSection from "./components/Intermediate";
import HeroSection from "./components/HeroSection";
import CarList from "./components/CarList";
import FeaturedCarsSection from "./components/FeaturedCar";
import WhyUse from "./components/WhyUse";
import BrandSection from "./components/Brands";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";
import BlogCarousel from "./components/Blog";
import Founder from "./components/Founder";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import BrowseCar from "./components/BrowseCars/BrowseCar";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar />
        <IntermediateSection />
        <HeroSection />
        <CarList />
        <FeaturedCarsSection />
        <WhyUse />
        <BrandSection /> `
        <Founder />
        <BlogCarousel />
        <FAQ />
        <Footer /> */}
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/used-car" element={<BrowseCar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
