import React from "react";

const PageHero = ({ image, title }) => (
  <div className="w-full relative">
    <img
      src={image}
      alt={title}
      className="w-full h-[60vh] object-contain object-center"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg pt-20 md:pt-0">{title}</h1>
    </div>
  </div>
);

export default PageHero;

