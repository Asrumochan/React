import React from 'react'
import image from '../Images/detail.jpeg'
import {useParams} from 'react-router-dom'
const ContactDetails = (props) => {
    let params=useParams()
    let contact=props.contacts.filter((contact)=>{
        return contact.id===params.id
    })
    console.log(contact)
  return (
    <div>
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="content">
                    <div className="header">{contact[0].name}</div>
                    <div className="description">{contact[0].email}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails
