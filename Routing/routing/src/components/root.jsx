import React from 'react'
import {NavLink} from 'react-router-dom'

const root = () => {
  return (
    <div>
      <h1>Root</h1>
      <NavLink to='/home'>Home</NavLink>
    </div>
  )
}

export default root