import React, { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext';

const CounterButtons = () => {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div className='flex items-center gap-4'>
      <button className='w-40 py-2 bg-sky-500 text-white font-bold rounded-lg' onClick={() => increment(5)}>افزایش</button>
      <button className='w-40 py-2 bg-rose-500 text-white font-bold rounded-lg' onClick={() => decrement(3)}>کاهش</button>
    </div>
  );
};

export default CounterButtons;