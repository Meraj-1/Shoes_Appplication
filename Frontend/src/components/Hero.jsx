import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const HeroSection = () => {
  const images = [assets.Hero3, assets.Hero4, assets.about];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div
      className="relative flex items-center justify-center text-white"
      style={{
        height: "100vh", 
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        backgroundAttachment: "fixed", 
        transition: "background-image 1.5s ease-in-out", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 md:bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Welcome to Our Web Application
        </h1>
        <p className="mt-4 text-sm md:text-lg lg:text-2xl">
          Experience the best with dynamic design.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm md:text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
