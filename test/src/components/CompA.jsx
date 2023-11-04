import React from 'react'
import CompB from  './CompB'

function CompA() {
    let fname='Asru',lname="parida";
  return (
    <div>
        <h1>Component A</h1>
        <h2>{"name: "+fname}</h2>
        <hr></hr>
        <CompB fname={fname} lname={lname}/>
    </div>
  )
}

export default CompA