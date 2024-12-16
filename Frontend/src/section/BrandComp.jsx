import React from "react";
import { assets, brand } from "../assets/assets"; // Assuming your images are in assets
import Title from "../components/Title";

const BrandSlider = () => {
  const products = [
    {
      name: "Nike",
      imageUrl: brand.nike,
    },
    {
      name: "Adidas UltraBoost 21",
      imageUrl: brand.adidas,
    },
    {
      name: "Puma RS-X3",
      imageUrl: brand.puma,
    },
    {
      name: "Bata",
      imageUrl: brand.bata,
    },
    {
      name: "Billy",
      imageUrl: brand.billy,
    },
    {
      name: "Balenciaga",
      imageUrl: brand.Balenciaga,
    },
    {
      name: "Chief",
      imageUrl: brand.chief,
    },
    {
      name: "Clarks",
      imageUrl: brand.clarks,
    },
  ];

  return (
    <div>
      {/* Slider Section */}
      {/* <h1 className="">OUR PARTNER'S</h1> */}
      {/* <Title text1={OUR} text2={PARTNER}/> */}
      <div className="overflow-hidden relative">
        <div className="flex md:py-10 items-center animate-slider">
          {products.concat(products).map((product, index) => (
            <div
              key={index}
              className="md:w-[400px] sm:w-[100px] md:mx-4  sm:mt-10 md:p-4  bg-white md:border rounded-lg md:shadow-md flex-shrink-0"
            >
              <img
                className="h-32 mx-auto object-contain"
                src={product.imageUrl}
                alt={product.name}
              />
              <h3 className="text-center text-xl font-semibold  text-gray-800 mt-2">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="grid lg:grid-cols-2 md:px-20 md:py-10 sm:grid-cols-1 gap-8 p-10">
        {/* Text Content */}
        <div className="flex justify-center items-center lg:px-20 md:px-10 sm:px-2 lg:py-20">
          <div className="">
            {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2> */}
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus quod nemo aliquam nulla obcaecati nam ad? Sunt
              perferendis magnam aperiam obcaecati, non qui modi illum,
              similique quos quis, vitae aliquid.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eveniet facilis aut aperiam illum ullam tempore voluptatibus
              atque ea tenetur! Itaque quibusdam impedit facilis harum debitis,
              dignissimos necessitatibus qui odit.
            </p>
          </div>
        </div>
        <div className="">
        <img src={assets.Hero3} alt="" />
                     
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;

