import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntermediateSection from './components/Intermediate';
import HeroSection from './components/HeroSection';
import CarList from './components/CarList';
import FeaturedCarsSection from './components/FeaturedCar';
import WhyUse from './components/WhyUse';
import BrandSection from './components/Brands';
import Footer from './components/Footer';
import FAQ from './components/Faq';
import BlogCarousel from './components/Blog';
import Founder from './components/Founder';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <IntermediateSection />
        <HeroSection />
        <CarList />
        <FeaturedCarsSection />
        <WhyUse />
        <BrandSection />  `
        <Founder />
        <BlogCarousel />
        <FAQ />
        <Footer />
       
      </div>
    </Router>
  );
}

export default App;
