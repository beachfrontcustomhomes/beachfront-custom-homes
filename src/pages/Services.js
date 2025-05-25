import React from "react";
import { Helmet } from "react-helmet";

const PageHero = ({ image, title }) => (
  <div className="relative w-full h-[70vh] overflow-hidden">
    <img
      src={image}
      alt={title}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
      <h1 className="text-white text-4xl md:text-6xl font-bold">{title}</h1>
    </div>
  </div>
);

const Services = () => (
  <>
  <Helmet>
      <title>Services | Beachfront Custom Homes</title>
      <meta
        name="description"
        content="Explore our luxury home services including custom builds, high-end renovations, and design-build project delivery in Southwest Florida."
      />
    </Helmet>
    <PageHero image="/services.jpg" title="Our Services" />
    <section className="p-10 text-gray-800 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
      <ul className="list-disc list-inside space-y-4 text-lg">
        <li>Custom Luxury Home Design & Construction</li>
        <li>Full-Scale Renovations & Remodels</li>
        <li>Interior Architecture & Premium Finishes</li>
        <li>Coastal Building Code & Site Planning Expertise</li>
        <li>Design-Build Solutions with a Single Point of Contact</li>
      </ul>
    </section>
  </>
);

export default Services;



