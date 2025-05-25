import React from "react";

const ThankYou = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white text-gray-800">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
      Thank You for Reaching Out
    </h1>
    <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-6">
      We appreciate your interest in Beachfront Custom Homes. A member of our team will be in touch with you shortly to discuss your vision and how we can bring it to life with precision, elegance, and care.
    </p>
    <p className="text-base text-gray-600 max-w-xl">
      In the meantime, feel free to contact us directly at{" "}
      <a href="tel:2392362407" className="text-black font-semibold hover:underline">
        (239) 236-2407
      </a>{" "}
      or{" "}
      <a href="mailto:info@beachfrontcustomhomes.com" className="text-black font-semibold hover:underline">
        info@beachfrontcustomhomes.com
      </a>.
    </p>
    <p className="mt-8">
      <a
        href="/"
        className="inline-block bg-black text-white px-6 py-3 text-lg rounded-full shadow hover:bg-gray-800 transition"
      >
        Return to Home
      </a>
    </p>
  </div>
);

export default ThankYou;
