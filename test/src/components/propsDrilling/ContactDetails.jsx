import React from 'react'

const ContactDetails = ({user}) => {
  return (
    <div>
        <div className="card">
            <div className="card-header">
            <img src={user.picture?.large} alt="" />
            </div>
            <div className="card-body">
                <h3>{user.name?.last}</h3>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails
