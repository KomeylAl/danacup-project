import React from "react";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  return (
    <div className="w-80 h-96 bg-white rounded-lg p-2">
      <Link to={`/products/${data.id}`}>
        <img
          className="w-full h-44 rounded-lg object-cover"
          src={data.image}
          alt=""
        />
      </Link>
      <div className="w-full space-y-3 mt-3">
        <Link to={`/products/${data.id}`}>
          <p className="text-lg font-semibold">{data.title}</p>
        </Link>
        <p className="text-rose-500">$ {data.price}</p>
      </div>
    </div>
  );
};

export default Product;
