import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  return (
    <>
      <h1>Timer:{time}</h1>
      <br />
      <button onClick={handleStart}>Start</button>
      <br />
      <br />
      <button onClick={handleStop}>Stop</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
    </>
  );
}

export default App;
