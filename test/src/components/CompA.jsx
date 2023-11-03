import React from 'react'
import CompB from  './CompB'

function CompA() {
    let name='Asru';
  return (
    <div>
        <h1>Component A</h1>
        <CompB name={name}/>
    </div>
  )
}

export default CompA