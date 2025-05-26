
import React from "react";
import { Helmet } from "react-helmet";
import PageHero from "../components/PageHero";

const Process = () => (
  <>
    <Helmet>
      <title>Our Process | Beachfront Custom Homes</title>
      <meta
        name="description"
        content="Explore the refined process of building a custom home with Beachfront Custom Homes—from concept to completion and beyond."
      />
    </Helmet>

    <PageHero image="/process.jpg" title="Our Process" />

    <section className="p-8 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Crafted with intention. Delivered with distinction.</h2>

      <p className="text-lg leading-relaxed mb-12">
        At Beachfront Custom Homes, extraordinary results begin with a refined process. We've thoughtfully designed every
        phase of your journey—from concept to completion—to ensure clarity, confidence, and an experience as elevated as
        the home we build for you.
      </p>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">1. Planning & Design</h3>
        <p className="text-lg leading-relaxed">
          Every home we build begins with a conversation. We take the time to understand your lifestyle, vision, and goals
          so we can craft a residence that is uniquely yours. From there, we assemble a curated team of industry-leading
          professionals—architects, interior designers, and trusted suppliers—whose talents are aligned with your style and expectations.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Rather than overwhelm you with hundreds of isolated decisions, we guide you through every step, offering experienced
          insight and effortless coordination. We schedule your design appointments, help refine selections, and manage timelines
          so you can focus on creating the home you’ve imagined—without the stress.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Our transparent, itemized budgeting process begins early and evolves as your plans take shape. By finalizing all costs
          prior to construction, we provide complete confidence in both your design and your investment.
        </p>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">2. Construction</h3>
        <p className="text-lg leading-relaxed">
          This is where vision becomes reality. Our build process is anchored in precision, craftsmanship, and communication.
          Your dedicated project supervisor—alongside founder JR Gill—personally oversees every phase, ensuring your home is
          built to the highest standards and delivered on schedule.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed mt-4 space-y-2">
          <li>Weekly progress reporting</li>
          <li>On-site walkthroughs and design confirmations</li>
          <li>Electrical and lighting layout meetings</li>
          <li>Milestone reviews and open-item tracking</li>
          <li>Seamless delivery of your completed home</li>
        </ul>
        <p className="text-lg leading-relaxed mt-4">
          Every detail is executed with care, every finish with purpose.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">3. Beyond the Build</h3>
        <p className="text-lg leading-relaxed">
          Your experience doesn’t end when we hand over the keys.
          Beachfront Custom Homes remains your trusted partner long after construction is complete. We take great pride in our homes—
          and in the relationships we build with the families who live in them. Should you need anything post-completion, we’re here to
          ensure your home continues to serve you with comfort and lasting value.
        </p>
      </div>
    </section>
  </>
);

export default Process;
