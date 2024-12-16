import React from "react";

const Shimmer = () => (
  <div className="flex flex-wrap gap-8 justify-center">
    {Array(10).fill().map((_, index) => (
      <div key={index} className="border border-gray-300 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white shadow-md rounded-lg animate-pulse">
        <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
        <div className="mt-2">
          <div className="bg-gray-300 h-6 w-3/4 mb-2"></div>
          <div className="bg-gray-300 h-4 w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);

export default Shimmer;