import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts,deleteContact}) => {
  const renderContactList=contacts.map((contact,i)=>{
    return(
      <ContactCard contact={contact} deleteContact={deleteContact} key={i}/>
    )
  })

  return (
    <div>
        <h1>Contact List</h1>
        <div className="ui celled list">
          {renderContactList}
        </div>
    </div>
  )
}

export default ContactList
