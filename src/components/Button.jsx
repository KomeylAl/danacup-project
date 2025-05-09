import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`w-64 bg-blue-500 px-4 py-2 rounded-lg text-white text-center cursor-pointer hover:bg-blue-700 transition-colors duration-300 ease-in-out ${className}`}>
      {children}
    </button>
  );
};

export default Button;
