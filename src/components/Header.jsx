import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full py-4 bg-white rounded-lg flex items-center justify-center gap-7">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/products">Products</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
