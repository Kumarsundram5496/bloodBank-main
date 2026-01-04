
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-red-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> +91 657 242 3422</span>
            <span className="hidden sm:flex items-center"><Mail className="w-3 h-3 mr-1" /> info@redcrosschaibasa.org</span>
          </div>
          <div className="flex space-x-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-red-200" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-red-200" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-red-200" />
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-full">
            <div className="w-2 h-7 bg-white absolute"></div>
            <div className="h-2 w-7 bg-white absolute"></div>
          </div>
          <div>
            <span className="text-xl font-bold text-red-600 block leading-none">RED CROSS</span>
            <span className="text-[10px] tracking-widest text-slate-500 uppercase">Chaibasa Branch</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-red-600 ${location.pathname === item.href ? 'text-red-600' : 'text-slate-600'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all shadow-lg flex items-center"
          >
            <Heart className="w-4 h-4 mr-2" /> Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t py-4 absolute w-full shadow-xl">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-600 hover:text-red-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="bg-red-600 text-white text-center py-3 rounded-lg font-bold"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-white text-xl font-bold mb-6">About Red Cross</h3>
          <p className="text-sm leading-relaxed mb-6">
            The Indian Red Cross Society (IRCS) is a voluntary humanitarian organization to protect human life and health based in India.
            It is part of the International Red Cross and Red Crescent Movement.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {NAV_ITEMS.map(item => (
              <li key={item.href}><Link to={item.href} className="hover:text-red-500 transition-colors">{item.label}</Link></li>
            ))}
            <li><Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-red-500 transition-colors">Blood Banking</Link></li>
            <li><Link to="/services" className="hover:text-red-500 transition-colors">Disaster Management</Link></li>
            <li><Link to="/services" className="hover:text-red-500 transition-colors">Emergency Ambulance</Link></li>
            <li><Link to="/services" className="hover:text-red-500 transition-colors">Physiotherapy</Link></li>
            <li><Link to="/services" className="hover:text-red-500 transition-colors">Vocational Training</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-red-500 shrink-0" />
              <span>Red Cross Bhavan, Sakchi, Jamshedpur - 831001, Jharkhand, India</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-red-500 shrink-0" />
              <span>+91 657 242 3422</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-red-500 shrink-0" />
              <span>support@redcrossjamshedpur.org</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Indian Red Cross Society, East Singhbhum District Branch. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
