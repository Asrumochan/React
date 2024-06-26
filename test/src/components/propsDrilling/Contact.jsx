import Axios  from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ContactList  from './ContactList'
import ContactDetails from './ContactDetails'
import './styles.css';
const Contact = () => {
    const [contacts,setContacts]=useState([])
    const [user,setUser]=useState({})

    const userData=(data)=>{
        setUser(data)
    }

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
        <div className="container mt-5">
            <div className="row">
                <div className=" col-8">
                    <h1>Contact Details </h1>
                    <div className='contacts'>
                        {
                            contacts.length >0 ? <ContactList contacts={contacts} userData={userData}/> : <h2>NO DATA</h2>
                        }
                    </div>
                </div>
                <div className="col-4">
                {
                    Object.keys(user).length>0 && <ContactDetails user={user}/> 
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
