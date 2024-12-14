import React from "react";
import { useLocation, useParams, Link } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
