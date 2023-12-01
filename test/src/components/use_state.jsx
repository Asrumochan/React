import React, { useState } from 'react'


function Use_state() {
    let [val,setVal]=useState(1)
    let decrHandler=()=>{
        setVal(val-1)
    }
    let incrHandler=()=>{
        setVal(val+1)
    }
  return (
    <div>
        <h3>Use State</h3>
        <hr />
        <button onClick={decrHandler}>-</button>
        <span>{val}</span>
        <button onClick={incrHandler}>+</button>
    </div>
  )h
}
export default Use_state