import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ServiceRoutes from './Components/Services/ServiceRoutes';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/*" element={<ServiceRoutes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
