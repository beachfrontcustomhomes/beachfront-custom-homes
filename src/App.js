import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import About from "./pages/About";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";


const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative">
      <Helmet>
  <title>Beachfront Custom Homes | Naples Luxury Home Builder</title>
  <meta name="description" content="Southwest Florida’s premier luxury custom home builder specializing in beachfront, golf course, and coastal contemporary homes." />
</Helmet>


      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-50 p-6">
  <div className="flex justify-between items-center">
    {/* Logo & Contact Info */}
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <Link to="/">
        <img src="/logo.png" alt="Beachfront Logo" className="w-[190px] h-auto" />
      </Link>
      <div className="text-white text-sm md:text-base leading-tight">
        <p>
          <a href="tel:2392362407" className="hover:underline">(239) 236-2407</a>
        </p>
        <p>
          <a href="mailto:info@beachfrontcustomhomes.com" className="hover:underline">
            info@beachfrontcustomhomes.com
          </a>
        </p>
      </div>
    </div>

    {/* Hamburger Toggle (mobile only) */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-white text-3xl focus:outline-none"
      aria-label="Toggle Menu"
    >
      ☰
    </button>
  </div>

  {/* Mobile menu */}
  {menuOpen && (
  <div className="absolute top-[80px] left-0 w-full bg-black/90 text-white text-lg py-6 z-50 flex flex-col items-center space-y-4 md:hidden">
    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
    <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
    <Link to="/process" onClick={() => setMenuOpen(false)}>Process</Link>
    <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
  </div>
)}


  {/* Desktop nav */}
  <nav className="hidden md:flex space-x-6 text-white text-lg font-medium absolute right-6 top-6">
    <Link to="/about">About</Link>
    <Link to="/services">Services</Link>
    <Link to="/process">Process</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/contact">Contact</Link>
  </nav>
</div>


      <main>{children}</main>
      <footer className="bg-gray-900 text-white py-10 px-6 mt-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Company Info */}
    <div>
      <h4 className="text-xl font-semibold mb-2">Beachfront Custom Homes</h4>
      <p className="text-sm text-gray-400 mb-2">Southwest Florida’s Premier Luxury Home Builder</p>
      <p className="text-sm"> <a href="tel:2392362407" className="hover:underline">(239) 236-2407</a></p>
      <p className="text-sm"> <a href="mailto:info@beachfrontcustomhomes.com" className="hover:underline">info@beachfrontcustomhomes.com</a></p>
    </div>

    {/* Quick Links */}
    <div className="md:text-right space-y-2">
      <h4 className="text-xl font-semibold mb-2">Explore</h4>
      <p><a href="/" className="hover:underline">Home</a></p>
      <p><a href="/about" className="hover:underline">About</a></p>
      <p><a href="/services" className="hover:underline">Services</a></p>
      <p><a href="/process" className="hover:underline">Process</a></p>
      <p><a href="/portfolio" className="hover:underline">Portfolio</a></p>
      <p><a href="/contact" className="hover:underline">Contact</a></p>
    </div>

  </div>
{/* Association Logos */}
<div className="mt-8 flex items-center justify-center space-x-6">
  <a href="https://www.nahb.org" target="_blank" rel="noopener noreferrer">
    <img src="/nahb-logo.png" alt="NAHB" className="h-20 w-auto" />
  </a>
  <a href="https://www.fhba.com" target="_blank" rel="noopener noreferrer">
    <img src="/fhba-logo.png" alt="FHBA" className="h-20 w-auto" />
  </a>
  <a href="https://www.cbia.net" target="_blank" rel="noopener noreferrer">
    <img src="/cbia-logo.png" alt="CBIA" className="h-20 w-auto" />
  </a>
</div>

  <div className="text-center text-xs text-gray-500 mt-8">
    &copy; {new Date().getFullYear()} Beachfront Custom Homes. All rights reserved.
  </div>
</footer>

    </div>
  );
};


const Home = () => (
  <div className="relative w-full h-screen overflow-hidden">
    <img
      src="/hero.jpg"
      alt="Hero"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />

    {/* Hero text overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Southwest Florida's Premier Custom Home Builder
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Crafting luxurious homes tailored to your lifestyle and vision.
      </p>
      <Link
        to="/contact"
        className="bg-white text-black px-6 py-3 text-lg font-semibold rounded-full shadow hover:bg-gray-200 transition"
      >
        Schedule a Consultation
      </Link>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Layout>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;