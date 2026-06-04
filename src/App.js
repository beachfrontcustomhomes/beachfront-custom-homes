import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import About from "./pages/About";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "HomeBuilder",
  "name": "Beachfront Custom Homes, LLC",
  "alternateName": "Beachfront Custom Homes",
  "description": "Boutique luxury custom home builder based in Southwest Florida, specializing in the design, construction, and renovation of bespoke beachfront and golf course estates.",
  "url": "https://www.beachfrontcustomhomes.com",
  "telephone": "+1-239-236-2407",
  "email": "info@beachfrontcustomhomes.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8951 Bonita Beach Rd SE Ste 525",
    "addressLocality": "Bonita Springs",
    "addressRegion": "FL",
    "postalCode": "34135",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Naples" },
    { "@type": "City", "name": "Bonita Springs" },
    { "@type": "City", "name": "Estero" },
    { "@type": "City", "name": "Fort Myers Beach" },
    { "@type": "City", "name": "Fort Myers" },
    { "@type": "City", "name": "Sanibel" },
    { "@type": "City", "name": "Captiva" },
    { "@type": "City", "name": "Marco Island" }
  ],
  "founder": {
    "@type": "Person",
    "name": "JR Gill",
    "jobTitle": "President"
  },
  "foundingDate": "2024",
  "image": "https://www.beachfrontcustomhomes.com/logo.png",
  "sameAs": [
    "https://www.instagram.com/beachfrontcustomhomes"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Contractor License",
    "recognizedBy": {
      "@type": "Organization",
      "name": "State of Florida"
    },
    "identifier": "CRC1335211"
  },
  "knowsAbout": [
    "Custom Home Building",
    "Luxury Home Renovation",
    "Beachfront Construction",
    "Golf Course Community Homes",
    "Coastal Estate Construction"
  ]
};

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative">
      <Helmet>
        <title>Beachfront Custom Homes | Luxury Custom Home Builder | Southwest Florida</title>
        <meta name="description" content="Boutique luxury custom home builder serving Naples, Fort Myers Beach, Sanibel, Captiva & Southwest Florida. Bespoke beachfront, golf course, and coastal estates built with uncompromising craftsmanship." />
        <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>
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
  <>
    {/* Hero */}
    <div className="relative w-full h-screen overflow-hidden">
      <img src="/hero.jpg" alt="Hero" className="absolute top-0 left-0 w-full h-full object-cover" />
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

    {/* Intro */}
    <section className="bg-white">
      <div className="max-w-[760px] mx-auto px-6 py-20 text-center">
        <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-bold text-[#1a2a3a] tracking-tight leading-tight mb-4">
          Beachfront Custom Homes
        </h2>
        <p className="text-[clamp(1rem,2.2vw,1.2rem)] font-normal text-[#5a6a7a] tracking-wide mb-12">
          Luxury Custom Home Builder — Southwest Florida
        </p>
        <p className="text-[1.0625rem] leading-[1.85] text-[#333333] mb-6 text-left">
          Your home should be as exceptional as the life you've built. Beachfront Custom Homes is a boutique luxury building firm based in Southwest Florida, specializing in the design, construction, and renovation of bespoke beachfront, golf course, and coastal estates for discerning clients who expect nothing less than extraordinary.
        </p>
        <p className="text-[1.0625rem] leading-[1.85] text-[#333333] text-left">
          Every project is a private commission — a collaboration built on trust, discretion, and an uncompromising commitment to craftsmanship. From beachfront estates on Sanibel and Captiva to exclusive golf course communities in Naples and Bonita Springs, we bring architectural vision and meticulous execution to every home we build.
        </p>
      </div>
    </section>

    {/* What We Do */}
    <section className="bg-[#f5f6f7]">
      <div className="max-w-[760px] mx-auto px-6 py-20">
        <h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold text-[#1a2a3a] text-center mb-12">
          What We Do
        </h2>
        <div className="mb-10">
          <h3 className="text-[1.2rem] font-bold text-[#1a2a3a] mb-2.5">Custom Home Builds</h3>
          <p className="text-[1.0625rem] leading-[1.8] text-[#333333]">
            From concept to completion, we craft luxury residences that reflect your lifestyle, built with superior materials and timeless architectural integrity.
          </p>
        </div>
        <div>
          <h3 className="text-[1.2rem] font-bold text-[#1a2a3a] mb-2.5">Luxury Home Renovation</h3>
          <p className="text-[1.0625rem] leading-[1.8] text-[#333333]">
            Thoughtful, high-end remodeling that elevates every detail of your existing home with the same precision we bring to new construction.
          </p>
        </div>
      </div>
    </section>

    {/* Service Area */}
    <section className="bg-white">
      <div className="max-w-[760px] mx-auto px-6 py-20 text-center">
        <h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold text-[#1a2a3a] mb-12">
          Serving Southwest Florida's Most Coveted Communities
        </h2>
        <p className="text-[1.0625rem] text-[#1a2a3a] tracking-wide leading-[2.2] mt-6">
          Naples <span className="text-[#8a9aaa] mx-1.5">·</span> Bonita Springs <span className="text-[#8a9aaa] mx-1.5">·</span> Estero <span className="text-[#8a9aaa] mx-1.5">·</span> Fort Myers Beach <span className="text-[#8a9aaa] mx-1.5">·</span> Sanibel <span className="text-[#8a9aaa] mx-1.5">·</span> Captiva <span className="text-[#8a9aaa] mx-1.5">·</span> Fort Myers <span className="text-[#8a9aaa] mx-1.5">·</span> Marco Island
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-[#f5f6f7]">
      <div className="max-w-[640px] mx-auto px-6 py-20 text-center">
        <h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold text-[#1a2a3a] mb-4">
          Begin the Conversation
        </h2>
        <p className="text-[1.0625rem] text-[#333333] leading-[1.8] mb-8">
          Building a luxury home is a deeply personal endeavor. We'd welcome the opportunity to learn about your vision.
        </p>
        <div className="flex flex-col items-center gap-2.5">
          <a href="tel:+12392362407" className="text-[#1a2a3a] no-underline text-[1.35rem] font-semibold">(239) 236-2407</a>
          <a href="mailto:info@beachfrontcustomhomes.com" className="text-[#1a2a3a] no-underline text-[1.0625rem]">info@beachfrontcustomhomes.com</a>
        </div>
        <p className="mt-7 text-[0.825rem] text-[#8a9aaa]">CRC1335211 · Beachfront Custom Homes, LLC</p>
      </div>
    </section>
  </>
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
