import React from "react";
import { Link } from "react-router";

const products = [
  { id: 1, name: "Laptop", price: "$1000" },
  { id: 2, name: "Smartphone", price: "$500" },
  { id: 3, name: "Headphones", price: "$100" },
];

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/:${product.id}`} state={product}>
              Product:{product.name} Price:{product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
