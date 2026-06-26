import React from "react";
import useCounterStore from "./zustand_store";

const Counter = () => {
  const { counter, increase_counter, decrease_counter, reset_counter } =
    useCounterStore();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {counter}</h2>
      <button onClick={increase_counter}>+</button>
      <button onClick={reset_counter}>reset</button>
      <button onClick={decrease_counter} disabled={counter === 0}>
        -
      </button>
    </div>
  );
};

export default Counter;
