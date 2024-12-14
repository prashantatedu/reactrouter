import React from "react";
import { Link, useSearchParams } from "react-router";
import Search from "./Search";

const products = [
  { id: 1, name: "Laptop", price: "$1000" },
  { id: 2, name: "Smartphone", price: "$500" },
  { id: 3, name: "Headphones", price: "$100" },
];

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all";
  const page = parseInt(searchParams.get("page")) || 1;

  const handleFilter = (filter) => {
    console.log(filter);
    setSearchParams({ filter });
  };

  const handlePageChange = (nextPage) => {
    setSearchParams({ page: nextPage });
  };

  return (
    <div>
      <h1>Product {page}</h1>
      <Search />
      <div>
        <button type="button" onClick={() => handleFilter("Electronics")}>
          Electronics
        </button>
        <button type="button" onClick={() => handleFilter("Mobiles")}>
          Mobiles
        </button>
        <button type="button" onClick={() => handleFilter("Computers")}>
          Computers
        </button>
        <p>Currently showing: {filter}</p>
        <button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
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
