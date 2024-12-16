import React, { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";



const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data); // Set fetched data in state
        setLoading(false); // Data fetched successfully
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-8 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white shadow-md rounded-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-2 text-gray-800">{product.name}</h2>
            {/* <p className="text-gray-600">{product.about}</p> */}
            <p className="mt-2 text-gray-700">
              <strong>Price:</strong> ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
