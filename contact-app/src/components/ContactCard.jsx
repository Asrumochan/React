import React from 'react'

import user from "../Images/user.png"
import { Link } from 'react-router-dom'
const ContactCard = (props) => {
  console.log(props)
  let {id,name,email}= props.contact;
  return (
    <div className="item">
        <img src={user} alt="" className='ui avatar image'/>
        <div className="content">
          <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
          <div className="header">{name}</div>
          <div>{email}</div>
          </Link>
        </div>
        <div style={{ textAlign: 'right' }}>
        <i className="trash alternate outline icon" style={{color:"red"}} onClick={()=>props.deleteContact(id)}></i>
    </div>
        
      </div>
  )
}

export default ContactCard
