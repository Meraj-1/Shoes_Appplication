// ProductPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // to get product ID from the URL
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the product by ID from the API
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Run the effect when the id changes

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="w-full h-96 bg-gray-200 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain max-h-full max-w-full"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-gray-600">{product.about}</p>
          <p className="text-2xl text-gray-900 font-bold">${product.price}</p>

          <button
            className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Product Details</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Category:</strong> {product.category}</li>
              <li><strong>Brand:</strong> {product.brand}</li>
              <li><strong>Stock:</strong> {product.stock}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ProductPage({ productId }) {
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
//         setProduct(response.data);  // Set product data if successful
//       } catch (err) {
//         setError('Failed to fetch product. Please try again later.');
//         console.error('Error fetching product:', err);  // Log the error for debugging
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (error) {
//     return <div>{error}</div>;  // Show error message if fetching fails
//   }

//   if (!product) {
//     return <div>Loading...</div>;  // Show loading state while waiting for the product data
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       {/* Render other product details */}
//     </div>
//   );
// }

// export default ProductPage;
