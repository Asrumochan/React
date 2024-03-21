import React from 'react'

const ContactList = ({contacts}) => {
  return (
    <div>
        <pre>{JSON.stringify(contacts)}</pre>
        {
            <table className='table table-striped'>
            <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
            </thead>
                    <tbody>
                   {
                     contacts.map((contact, index) =>{
                        return (
                            <tr key={index}>
                                <td>{contact.login.uuid}</td>
                                <td>{contact.name.first+" "+contact.name.last}</td>
                                <td>{contact.email}</td>
                            </tr>
                        )
                    })
                   }
                    </tbody>
                </table>
           
        }
    </div>
  )
}

export default ContactList
