import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts}) => {
  const renderContactList=contacts.map((contact,i)=>{
    return(
      <ContactCard contact={contact} key={i}/>
    )
  })

  return (
    <div>
        <div className="ui celled list">
          {renderContactList}
        </div>
    </div>
  )
}

export default ContactList
