
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Volunteer from './pages/Volunteer';
import AIChatbot from './components/AIChatbot';

// Mock pages for missing routes
const ServicesPlaceholder = () => (
  <div className="py-24 container mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold mb-6">Our Services</h1>
    <p className="text-slate-600 max-w-xl mx-auto">Site is under construction</p>
  </div>
);

const ContactPlaceholder = () => (
  <div className="py-24 container mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <div className="max-w-xl mx-auto space-y-4">
      <p className="text-slate-600">Reach out to us for any inquiries or support.</p>
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-left">
        <p className="mb-2"><strong>Address:</strong> Red Cross Bhavan, Sadar Bazar, Chaibasa</p>
        <p className="mb-2"><strong>Phone:</strong> +91 0000000000</p>
        <p className="mb-2"><strong>Email:</strong> info@redcrosswestsinghbhum.org</p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/services" element={<ServicesPlaceholder />} />
          <Route path="/contact" element={<ContactPlaceholder />} />
          <Route path="/blood-bank" element={<ServicesPlaceholder />} />
          <Route path="/donate" element={<ContactPlaceholder />} />
          {/* Default Route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
      <AIChatbot />
    </Router>
  );
};

export default App;
