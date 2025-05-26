import React from "react";

const PageHero = ({ image, title }) => (
  <div
    className="relative w-full h-[60vh] bg-cover bg-center"
    style={{ backgroundImage: `url(${image})` }}
  >
    {/* Overlay for contrast */}
    <div className="absolute inset-0 bg-black/40 z-0" />

    {/* Title */}
    <div className="relative z-10 flex items-start justify-center h-full">
      <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg pt-40 text-center">
        {title}
      </h1>
    </div>
  </div>
);

export default PageHero;
