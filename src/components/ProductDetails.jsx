import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useProduct(id);

  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center gap-4">
      {error && <p className="text-rose-500">{error}</p>}

      {isLoading && <p className="text-white">Is loading...</p>}

      {data && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <img src={data.image} alt="" className="w-full h-[600px] object-cover rounded-lg"/>
          <h1 className="text-white text-3xl font-semibold">{data.title}</h1>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
