import React from "react";

const Input = ({type, placeholder}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-2/3 bg-white rounded-lg px-4 py-2 border border-gray-300"
    />
  );
};

export default Input;
