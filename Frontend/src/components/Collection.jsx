// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Shimmer from "./Shimmer";

// const Collection = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/products");
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <Shimmer />;
//   }

//   const handleProductClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <div className="p-4">
//       <div className="flex flex-wrap gap-4 justify-center">
//         {products.map((product) => (
//           <div
//             key={product._id} // Use _id here, assuming your product object has the MongoDB id
//             className="border border-gray-300 px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white shadow-md rounded-lg cursor-pointer"
//             onClick={() => handleProductClick(product._id)} // Pass the product _id here
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <h2 className="text-xl pt-3 flex justify-center font-semibold bg-red-300 mt-5 text-rr">
//               {product.name}
//             </h2>
//             <p className="mb-3 p-1 flex justify-center bg-gray-200 text-gray-700">
//               <strong>Price:</strong> ${product.price}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Collection;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Shimmer from "./Shimmer";

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <Shimmer />;  // Shimmer loader while fetching data
  }

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);  // Redirect to the product detail page
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <div
            key={product._id} // Unique identifier for each product (MongoDB ObjectId)
            className="border border-gray-300 px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white shadow-md rounded-lg cursor-pointer"
            onClick={() => handleProductClick(product._id)} // Handle click event
          >
            <img
              src={product.image}  // Image of the product
              alt={product.name}  // Alt text for image
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl pt-3 flex justify-center font-semibold bg-red-300 mt-5 text-rr">
              {product.name}  {/* Product name */}
            </h2>
            <p className="mb-3 p-1 flex justify-center bg-gray-200 text-gray-700">
              <strong>Price:</strong> ${product.price}  {/* Product price */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;

