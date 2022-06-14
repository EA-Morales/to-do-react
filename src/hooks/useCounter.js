import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const counter = tasks => {
    console.log(tasks);
  };

  return [count, counter];
};

export default useCounter;
