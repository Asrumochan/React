import React from 'react'
import {useLocation} from 'react-router-dom'
const Login = () => {
    let location=useLocation()
  return (
    <div>
      <h1>login successful {location.state.name}</h1>
    </div>
  )
}

export default Login
