import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import RealEstate from "./Components/RealEstateProject/RealEstate";
import MusicVisualizer from "./Components/MusicVisualizerProject/MusicVisualizer";
import Pergola from "./Components/PergolaProject/Pergola";
import Jeopardy from "./Components/JeopardyProject/Jeopardy";
import EventOrganiser from "./Components/EventOrganiserProject/EventOrganiser";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <img
          src="/images/Logo/Ilie Ioan-Calin_Logo.png"
          alt="Logo"
          className="loader-logo"
        />
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proiecte" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proiecte/real-estate" element={<RealEstate />} />
          <Route path="/proiecte/music-visualizer" element={<MusicVisualizer />} />
          <Route path="/proiecte/pergola" element={<Pergola />} />
          <Route path="/proiecte/jeopardy" element={<Jeopardy />} />
          <Route path="/proiecte/event-organiser" element={<EventOrganiser />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
