import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Main Canonical Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legacy URL Redirects */}
          <Route path="/services/engine-overhauling" element={<Navigate to="/services/engine-overhauling-islamabad" replace />} />
          <Route path="/services/brake-service" element={<Navigate to="/services/brake-service-islamabad" replace />} />
          <Route path="/services/electrical-diagnostics" element={<Navigate to="/services/electrical-diagnostics-islamabad" replace />} />
          <Route path="/services/suspension-transmission" element={<Navigate to="/services/suspension-repair-islamabad" replace />} />
          <Route path="/services/mechanical-services" element={<Navigate to="/services/engine-overhauling-islamabad" replace />} />
          <Route path="/services/oil-change" element={<Navigate to="/services/oil-change-islamabad" replace />} />

          {/* 404 Catch-All Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
