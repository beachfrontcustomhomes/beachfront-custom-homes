import React from "react";
import { Helmet } from "react-helmet";
import PageHero from "../components/PageHero";

const Services = () => (
  <>
    <Helmet>
      <title>Services | Beachfront Custom Homes</title>
      <meta
        name="description"
        content="Discover our luxury custom home building and high-end renovation services tailored to elevate your lifestyle in Southwest Florida."
      />
    </Helmet>

    <PageHero image="/services.jpg" title="Our Services" />

    <section className="p-8 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">Custom Home Builds</h3>
        <p className="text-lg leading-relaxed">
          At Beachfront Custom Homes, building luxury residences is at the heart of what we do.
          Each home is a reflection of the people who live in it—crafted with precision, elegance,
          and the highest level of care. We work closely with you at every stage to ensure your home
          is a seamless extension of your lifestyle and vision.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          From concept to completion, our focus is on architectural excellence, superior materials,
          and a concierge-level building experience. With every detail thoughtfully considered,
          your home is more than just a place to live—it’s a legacy built to last.
        </p>
        <p className="text-lg leading-relaxed mt-4 font-semibold">
          Begin your custom home journey with a team that values timeless craftsmanship and personalized service.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Luxury Home Renovation</h3>
        <p className="text-lg leading-relaxed">
          Whether your tastes have evolved or you’re seeking to reimagine your current space,
          our renovation services are designed to transform your home with elegance and intention.
          We specialize in high-end remodeling that enhances both form and function, elevating every
          room to match your refined lifestyle.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          From luxury kitchen and bath upgrades to full-home transformations, we bring unmatched attention
          to detail and expert project execution. The result is a home that feels brand new—yet entirely
          and unmistakably yours.
        </p>
        <p className="text-lg leading-relaxed mt-4 font-semibold">
          Let us re-envision your surroundings with the same care and craftsmanship we bring to every custom build.
        </p>
      </div>
    </section>
  </>
);

export default Services;
