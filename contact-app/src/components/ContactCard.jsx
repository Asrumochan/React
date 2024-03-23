import React from 'react'
import user from "../Images/user.png"
const ContactCard = ({contact}) => {
  return (
    <div className="item">
        <img src={user} alt="" className='ui avatar image'/>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
        <i className="trash alternate outline icon" style={{color:"red"}}></i>
    </div>
        
      </div>
  )
}

export default ContactCard
