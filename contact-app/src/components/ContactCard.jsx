import React from 'react'
import user from "../Images/user.png"
const ContactCard = ({contact,deleteContact}) => {
  return (
    <div className="item">
        <img src={user} alt="" className='ui avatar image'/>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
        <i className="trash alternate outline icon" style={{color:"red"}} onClick={()=>deleteContact(contact.name)}></i>
    </div>
        
      </div>
  )
}

export default ContactCard
