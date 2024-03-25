import React from 'react'
import image from '../Images/detail.jpeg'
import {useLocation,useNavigate} from 'react-router-dom'
const ContactDetails = () => {
    const navigate=useNavigate()
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
        <div className='center-div'>
        <button className='ui button blue center' onClick={()=>{navigate('/')}}>Back to ContactList</button>
        </div>
    </div>
  )
}

export default ContactDetails
