import React,{useState} from 'react'

const Counter = () => {

    const [count,setCount]=useState(1)
    const incrHandler=()=>{
        setCount((prev)=>prev+1)
    }
    const decrHandler=()=>{
        setCount((prev)=>prev-1)
    }
  return (
    <div>
            <button data-testid="decr" onClick={decrHandler}>-</button>
            <p data-testid='count'>{count}</p>
            <button data-testid='incr' onClick={incrHandler}>+</button>
    </div>
  )
}

export default Counter
