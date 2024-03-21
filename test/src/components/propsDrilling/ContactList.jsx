import React from 'react'
const ContactList = ({contacts,userData}) => {
    const showData=(contact)=>{
        userData(contact)
    }

  return (
    <div>
        {
            <table className='table table-striped '>
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
                            <tr key={index} onClick={()=>showData(contact)}>
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
