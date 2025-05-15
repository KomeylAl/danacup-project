import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);

  const increment = (payload) => {
    setCount((prevCount) => prevCount + payload);
  };

  const decrement = (payload) => {
    setCount((prevCount) => prevCount - payload);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {props.children}
    </CounterContext.Provider>
  );
};
