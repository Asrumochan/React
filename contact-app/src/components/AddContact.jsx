import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddContact = (props) => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")

  const add=(e)=>{
      e.preventDefault();
      if(name==="" || email===""){
        alert("All fields are mandatory")
        return
      }
      props.AddContactHandler(name, email)
      setName("")
      setEmail("")
  }
  return (
    <div>
        <div className="ui main">
          <h2>Add Contact</h2>
          <Link to="/"><button className='ui button green right'>Contact List</button></Link>
          <form className='ui form' onSubmit={add}>
            <div className='field'>
              <label>Name</label>
              <input type="text" value={name} placeholder='name' onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className='field'>
              <label>Email</label>
              <input type="email" value={email} placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <button className='ui button blue'>Add</button>
          </form>
        </div>
    </div>
  )
}

export default AddContact
