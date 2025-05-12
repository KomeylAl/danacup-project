import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setProducts(response.data))
        .catch((error) => {
          console.log(error);
          setError(error.message)
        })
        .finally(() => setIsLoading(false));
    };

    getData();
  }, []);
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center gap-4">
      {error && <p className="text-rose-500">{error}</p>}

      {isLoading && <p className="text-white">Is loading...</p>}

      {posts.map((post, index) => (
        <Post data={post} key={index} />
      ))}
    </div>
  )
}

export default Products