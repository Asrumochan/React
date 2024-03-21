import Axios  from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ContactList  from './ContactList'

const Contact = () => {
    const [contacts,setContacts]=useState([])

    useEffect(()=>{
        Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then((resp)=>{
            setContacts(resp.data)
        }).catch((err)=>{
            console.log("Error: "+ err);
        })
    },[])

  return (
    <div>
      <pre>{JSON.stringify(contacts)}</pre>
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default Contact
