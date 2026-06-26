import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByNumber,
  reset,
} from "./redux/features/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const resetHandler = () => {
    dispatch(reset());
  };
  const increaseByNumberHandler = () => {
    dispatch(incrementByNumber(number));
  };

  return (
    <>
      <div>
        <button onClick={incrementHandler}>+</button>
      </div>
      <div>
        <p>Counter: {count}</p>
      </div>
      <div>
        <button onClick={decrementHandler}>-</button>
      </div>
      <div>
        <button onClick={resetHandler}>reset</button>
      </div>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <button onClick={() => setNumber(0)}>reset Number</button>
      <br />
      <div>
        <button onClick={increaseByNumberHandler}>Inc by number</button>
      </div>
    </>
  );
}

export default App;
