import React from "react";
import { Helmet } from "react-helmet";
import PageHero from "../components/PageHero"; 


const Portfolio = () => (
  <>
    <Helmet>
      <title>Portfolio | Beachfront Custom Homes</title>
      <meta
        name="description"
        content="View signature luxury homes by Beachfront Custom Homes, crafted with exceptional attention to detail and coastal design excellence."
      />
    </Helmet>

    <PageHero image="/portfolio.jpg" title="Our Portfolio" />

    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Coming Soon</h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-700 mb-4">
        Our collection of bespoke homes is currently being curated.
      </p>
      <p className="text-md text-gray-600 mb-8">
        Please contact us to view a private selection of completed projects and learn how we can bring your vision to life.
      </p>
      <a
        href="/contact"
        className="bg-black text-white px-6 py-3 text-lg rounded-full shadow hover:bg-gray-800 transition"
      >
        Schedule a Private Consultation
      </a>
    </section>
  </>
);

export default Portfolio;

