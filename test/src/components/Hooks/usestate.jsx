import { useState } from "react";

const Hook =()=>{

    const [count, setCount] = useState(() => {
        return 1; 
      });
      const incr =()=>{
        setCount(c => c +1);
      }
    return (
        <>
    <h1>Hooks in React</h1>
    <button onClick={incr}>+</button>
    <p>Clicked {count} times</p>
    </>
        )
}

export default Hook;