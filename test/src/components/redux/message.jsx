import React from 'react'

function message() {
    let gmHandler=()=>{
        alert("gm")
    }
    let gnHandler=()=>{
        alert("gn")
    }
  return (
    <div>
        <h2>Hello!</h2>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default message