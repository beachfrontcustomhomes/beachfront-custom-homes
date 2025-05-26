import React from "react";

const PageHero = ({ image, title }) => (
  <div
    className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center pt-35 md:pt-0"
    style={{ backgroundImage: `url(${image})` }}
  >
    <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">{title}</h1>
  </div>
);

export default PageHero;


