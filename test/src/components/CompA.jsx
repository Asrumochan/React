import React from 'react'
import CompB from  './CompB'

function CompA() {
    let name='Asru';
  return (
    <div>
        <h1>Component A</h1>
        <h2>{"name: "+name}</h2>
        <hr></hr>
        <CompB name={name} id={101}/>
    </div>
  )
}

export default CompA