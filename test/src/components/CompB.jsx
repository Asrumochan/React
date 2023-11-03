import React from 'react'

function CompB(prop) {
  return (
    <div>
        <pre>{JSON.stringify(prop)}</pre>
        <h2>{"name: "+prop.name}</h2>
    </div>
  )
}

export default CompB