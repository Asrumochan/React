import React from 'react'
import user from "../Images/user.png"
import {useNavigate } from 'react-router-dom'
const ContactCard = (props) => {
  let {id,name,email}= props.contact;
  const navigate = useNavigate()
  return (
    <div className="item">
        <img src={user} alt="" className='ui avatar image'/>
        <div className="content" onClick={()=>{navigate(`/contact/${id}`,{state:props.contact})}}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
        <i className="trash alternate outline icon" style={{color:"red"}} onClick={()=>props.deleteContact(id)}></i>
    </div>
        
      </div>
  )
}

export default ContactCard
