import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { productId } = useParams(); // Retrieve product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details by ID
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        console.log("Product Details:", response.data); // Log product details
        setProduct(response.data); // Save product details
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  return (
    <div className="max-w-[800px] mx-auto mt-[20px]">
      {product ? (
        <div className="shadow-md p-[20px]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[300px] h-[300px] mx-auto mb-[20px]"
          />
          <h1 className="text-[30px] font-bold">{product.title}</h1>
          <p className="text-[20px]">{product.description}</p>
          <p className="text-[24px] font-bold">Price: ${product.price}</p>
          <p className="text-[18px]">Brand: {product.brand}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default ProductDetails;
