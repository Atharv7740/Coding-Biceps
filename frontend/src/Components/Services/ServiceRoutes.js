import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Services from './Services';
import PaidAds from './PaidAds';
import StrategyConsulting from './StrategyConsulting';
import SeoContent from './SeoContent';
import EngineeringMentorship from './EngineeringMentorship';
import AutomationCrm from './AutomationCrm';
import WebDev from './WebDev';
import SocialMedia from './SocialMedia';

const ServiceRoutes = () => {
  return (
    <Routes>
      <Route index element={<Services />} />
      <Route path="paid-ads" element={<PaidAds />} />
      <Route path="strategy-consulting" element={<StrategyConsulting />} />
      <Route path="seo-content" element={<SeoContent />} />
      <Route path="engineering-mentorship" element={<EngineeringMentorship />} />
      <Route path="automation-crm" element={<AutomationCrm />} />
      <Route path="web-development" element={<WebDev />} />
      <Route path="social-media" element={<SocialMedia />} />
      {/* Catch invalid service routes and redirect to services page */}
      <Route path="*" element={<Navigate to="/services" replace />} />
    </Routes>
  );
};

export default ServiceRoutes; 