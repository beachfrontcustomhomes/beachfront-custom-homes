import React from "react";

const PageHero = ({ image, title }) => (
  <div className="relative w-full h-[90vh] overflow-hidden">
    <img
      src={image}
      alt={title}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
      <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg pt-20 md:pt-0">
        {title}
      </h1>
    </div>
  </div>
);

export default PageHero;


