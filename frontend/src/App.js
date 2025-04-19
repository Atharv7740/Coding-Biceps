import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import PaidAds from './Components/Services/PaidAds';
import StrategyConsulting from './Components/Services/StrategyConsulting';
import SeoContent from './Components/Services/SeoContent';
import EngineeringMentorship from './Components/Services/EngineeringMentorship';
import AutomationCrm from './Components/Services/AutomationCrm';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/paid-ads" element={<PaidAds />} />
        <Route path="/services/strategy-consulting" element={<StrategyConsulting />} />
        <Route path="/services/seo-content" element={<SeoContent />} />
        <Route path="/services/engineering-mentorship" element={<EngineeringMentorship />} />
        <Route path="/services/automation-crm" element={<AutomationCrm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
