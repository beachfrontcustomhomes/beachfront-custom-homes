import React from "react";
import { Helmet } from "react-helmet";
import PageHero from "../components/PageHero";

const About = () => (
  <>
    <Helmet>
      <title>About | Beachfront Custom Homes</title>
      <meta
        name="description"
        content="Learn about our legacy of luxury homebuilding in Southwest Florida and the values that define Beachfront Custom Homes."
      />
    </Helmet>

    <PageHero image="/about.jpg" title="About Us" />

    <section className="p-10 text-gray-800 max-w-4xl mx-auto space-y-8">
  <h2 className="text-4xl font-bold text-center mb-4">Crafting Homes as Exceptional as Their Owners</h2>

  <p className="text-lg leading-relaxed">
    At <strong>Beachfront Custom Homes</strong>, we don't just build homes — we curate a luxury experience that is as thoughtfully designed as the residences we create. Based in Southwest Florida, our boutique firm specializes in the design, construction, and renovation of bespoke beachfront, coastal and golf community estates for discerning clients who demand exceptional quality, timeless architecture, and personalized service.
  </p>

  <p className="text-lg leading-relaxed">
    Every project we undertake is a private commission — a deeply collaborative process that begins with listening and ends with the delivery of a home that is uncompromising in detail, craftsmanship, and design integrity. Whether you're building from the ground up or reimagining your current property, we are your trusted partner through every step of the journey.
  </p>

  <p className="text-lg leading-relaxed">
    Our reputation is built on discretion, transparency, and a relentless pursuit of excellence. From site selection and architectural planning to custom finishes and coastal compliance, we navigate complexity with ease — protecting your time, your investment, and your vision.
  </p>

  <p className="text-lg leading-relaxed">
    Our clients expect more than just a beautifully built home. They expect an experience that is seamless, respectful, and elevated — and that is exactly what we deliver.
  </p>
</section>

<section className="max-w-3xl mx-auto my-16 px-6 text-center">
  <blockquote className="text-2xl italic text-gray-700 leading-relaxed border-l-4 border-black pl-6">
    “A truly custom home is more than a project — it’s a private collaboration, an expression of lifestyle, and a lasting legacy. That’s the level of detail and respect we bring to every client we serve.”
  </blockquote>
  <p className="mt-4 text-lg text-gray-600 font-semibold">— JR Gill, President</p>
</section>

<section className="bg-gray-100 py-12 px-6 mt-16">
  <div className="max-w-4xl mx-auto text-center space-y-8">
    <h3 className="text-3xl font-bold">Our Values</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-8 text-lg text-gray-700">
      
      <div>
        <h4 className="text-xl font-semibold mb-2">Uncompromising Craftsmanship</h4>
        <p>
          We believe a custom home should be a reflection of art — expertly crafted, structurally sound, and timeless in its beauty. Our commitment to precision and detail is unmatched.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-2">Discretion & Trust</h4>
        <p>
          We work with clients who value their privacy and time. Our process is built on trust, clear communication, and the utmost discretion throughout every phase of your project.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-2">Vision-Driven Collaboration</h4>
        <p>
          Your home begins with your vision. We listen deeply and collaborate closely to bring that vision to life with clarity, creativity, and refined execution.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-2">Enduring Design</h4>
        <p>
          We create homes that transcend trends. Each project is designed with architectural integrity, tailored for your lifestyle, and built to withstand both time and the coastal environment.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-white py-12 px-6">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      To deliver a custom-tailored homebuilding experience defined by integrity, artistry, and exceptional service — from first conversation to final handoff. We are dedicated to crafting exceptional homes that embody our clients’ highest standards of luxury, lifestyle, and legacy.
    </p>
  </div>
</section>

  </>
);

export default About;


