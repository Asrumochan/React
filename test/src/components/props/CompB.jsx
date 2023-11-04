import React from 'react'

function CompB(prop) {
  return (
    <div>
      <h1>Component B</h1>
        <pre><strong>{JSON.stringify(prop)}</strong></pre>
        <h2>{"name: "+prop.fname+" "+prop.lname}</h2>
    </div>
  )
}

export default CompB