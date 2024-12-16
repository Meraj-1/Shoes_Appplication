import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white">
      <img className="w-full" src={product.imageUrl} alt={product.name} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl">{product.name}</h2>
        <p className="text-gray-400 text-sm">{product.description}</p>
        <p className="text-xl mt-2">{product.price}</p>
      </div>
      <div className="px-6 py-4">
        <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">{product.category}</span>
        <div className="mt-2 flex items-center">
          <span className="text-yellow-400 text-sm">{`⭐ ${product.rating}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
