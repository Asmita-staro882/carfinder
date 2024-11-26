import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import BrowseCar from "./components/BrowseCars/BrowseCar";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/About/AboutPage";
import HowItWorks from "./components/Howitworks/HowItWorks";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/used-car" element={<BrowseCar />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/howitworks" element={<HowItWorks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
