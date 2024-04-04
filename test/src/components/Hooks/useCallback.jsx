import React, { useState, useCallback } from 'react';

const App = () => {
  // State using useState hook
  const [count, setCount] = useState(0);

  // Function to increment count, wrapped in useCallback
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array ensures that the function is only created once

  // Function to log the current count, wrapped in useCallback
  const logCount = useCallback(() => {
    console.log(`Current count: ${count}`);
  }, [count]); // Dependency array includes count to ensure the function has access to the latest count value

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={logCount}>Log Count</button>
    </div>
  );
};

export default App;