import React from "react";
import { CounterProvider } from "../context/CounterContext";
import CounterDisplay from "./counter/CounterDisplay";
import CounterButtons from "./counter/CounterButton";

const Counter = () => {
  return (
    <CounterProvider>
      <div className="text-white w-full h-full flex flex-col items-center justify-center gap-5">
        <h1>شمارنده با Context API</h1>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
};

export default Counter;
