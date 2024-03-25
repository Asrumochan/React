import React from 'react'
import image from '../Images/detail.jpeg'

const ContactDetails = (props) => {
    
  return (
    <div>
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="content">
                    <div className="header">as</div>
                    <div className="description">sds</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails
