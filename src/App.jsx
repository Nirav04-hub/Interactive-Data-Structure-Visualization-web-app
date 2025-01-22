import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import VisualizationPlaceholder from "./components/VisualizationPlaceholder";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/visualization" element={<VisualizationPlaceholder />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
