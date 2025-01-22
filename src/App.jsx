import React from "react";
import "./css/index.css"; // Corrected path if you're styling globally
import Header from "./components/Header";
import Footer from "./components/Footer";
import VisualizationArea from "./components/VisualizationArea";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <VisualizationArea />
      </main>
      <Footer />
    </div>
  );
};

export default App;
