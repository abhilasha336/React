import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(1051312);

  useEffect(() => {
    // Start the counter using setInterval
    const intervalId = setInterval(() => {
      // Increment the counter value
      setCounter(prevCounter => prevCounter + 1);
    }, 15); // Interval in milliseconds

    // Optionally, clear the interval after a certain condition is met
    // For example, if you want to stop the counter when it reaches a maximum value
    const maxCounter = 1051530;
    if (counter >= maxCounter) {
      clearInterval(intervalId);
    }

    // Clean up function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [counter]); // Dependency array ensures effect runs when counter changes

  return <span className="clients">{counter}</span>;
};

export default Counter;
