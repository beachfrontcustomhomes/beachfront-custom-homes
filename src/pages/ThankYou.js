import React from "react";

const PageHero = ({ image, title }) => (
  <div className="relative w-full h-[65vh] overflow-hidden">
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
const ThankYou = () => (
  <>
    <div className="relative w-full h-[60vh] overflow-hidden">
      <img
        src="/thankyou.jpg"
        alt="Thank You"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Thank You</h1>
      </div>
    </div>

    <div className="min-h-[40vh] flex flex-col items-center justify-center text-center px-6 bg-white text-gray-800 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
        Thank You for Reaching Out
      </h2>
      <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-6">
        We appreciate your interest in Beachfront Custom Homes. A member of our team will be in touch with you shortly to discuss your vision and how we can bring it to life with precision, elegance, and care.
      </p>
      <p className="text-base text-gray-600 max-w-xl">
        In the meantime, feel free to call us at{" "}
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
  </>
);

export default ThankYou;