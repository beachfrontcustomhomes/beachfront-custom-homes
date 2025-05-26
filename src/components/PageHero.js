import React from "react";

const PageHero = ({ image, title }) => (
  <div
    className="relative w-full h-[60vh] bg-cover bg-center"
    style={{ backgroundImage: `url(${image})` }}
  >
    {/* Overlay for contrast */}
    <div className="absolute inset-0 bg-black/40 z-0" />

    {/* Title Wrapper */}
    <div className="relative z-10 h-full flex justify-center">
      <div className="flex items-start md:items-center justify-center w-full h-full px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg pt-72 md:pt-0 text-center">
          {title}
        </h1>
      </div>
    </div>
  </div>
);

export default PageHero;
