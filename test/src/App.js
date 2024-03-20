import React, { useState } from 'react'
import Useeffect from './components/Hooks/useeffect'
import Usestate from './components/Hooks/usestate'
function App() {
  const [flag ,setFlag]=useState(true)
  const changeFlag=()=>{
    setFlag(!flag)
  }
  return (
    <div>
      {
        flag ? <Useeffect/> : <Usestate/>
      }
       <button onClick={changeFlag}>Change </button>
    </div>
  )
}

export default App