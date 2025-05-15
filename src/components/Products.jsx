import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useProducts } from "../hooks/useProducts";

const Products = () => {
  const { data: products, isLoading, error } = useProducts();

  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center gap-4">
      {error && <p className="text-rose-500">{error}</p>}

      {isLoading && <p className="text-white">Is loading...</p>}

      {products &&
        products.map((product, index) => (
          <Product data={product} key={index} />
        ))}
    </div>
  );
};

export default Products;
