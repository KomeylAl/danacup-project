import React, { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext';

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>شمارنده: {count}</h2>
    </div>
  );
};

export default CounterDisplay;