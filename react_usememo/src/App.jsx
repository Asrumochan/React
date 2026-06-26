import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const handleResult = () => {
    for (let index = 0; index < 1000000000; index++) {}
    return num * 2;
  };
  const result = useMemo(() => handleResult(), [num]);


  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <p>result: {result}</p>
    </>
  );
}

export default App;
