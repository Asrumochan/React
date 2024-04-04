import React, { useState, useMemo } from 'react';

const App = () => {
  // State using useState hook
  const [count, setCount] = useState(0);

  // Memoized value using useMemo hook
  const squaredCount = useMemo(() => {
    console.log('Calculating squared count...');
    return count * count;
  }, [count]);

  // Event handler to increment count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Squared Count: {squaredCount}</h2>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default App;