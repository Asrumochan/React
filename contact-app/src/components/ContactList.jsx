import React from 'react'
import ContactCard from './ContactCard'
import {Link} from 'react-router-dom'

const ContactList = (props) => {
  const renderContactList=props.contacts.map((contact,i)=>{
    return(
      <ContactCard contact={contact} deleteContact={props.deleteContact} key={i}/>
    )
  })

  return (
    <div>
          <h1></h1>
        <h1>Contact List</h1>
        <div style={{ textAlign: 'right' }}>
          <Link to='/add'><button className='ui button blue right'>Add Contact</button></Link>
        </div>
        <div className="ui celled list">
          {renderContactList}
        </div>
    </div>
  )
}

export default ContactList
