import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Promotions from './components/Promotions';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Home from './components/Home'; // ✅ Asegurate de tener esta línea
import './assets/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/promociones" element={<Promotions />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;