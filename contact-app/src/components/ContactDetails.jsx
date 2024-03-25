import React from 'react'
import image from '../Images/detail.jpeg'
import {useLocation} from 'react-router-dom'
const ContactDetails = () => {
    const location =useLocation();
    const contact=location.state;
  return (
    <div>
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div className="description">{contact.email}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails
