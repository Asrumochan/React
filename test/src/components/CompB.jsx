import React from 'react'

function CompB(prop) {
  return (
    <div>
      <h1>Component B</h1>
        <pre>{JSON.stringify(prop)}</pre>
        <h2>{"name: "+prop.name}</h2>
    </div>
  )
}

export default CompB