import React from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const User = (props) => {
  const history =useNavigate()
  const params = useParams()
  console.log(history)
  return (
    <div>
        <h1></h1>
      <h1>User ID is {params.id} </h1>
    </div>
  )
}

export default User
