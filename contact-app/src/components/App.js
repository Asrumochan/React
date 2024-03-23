 import Header from "./Header";
 import { v4 as uuidv4 } from 'uuidv4';
 import AddContact from "./AddContact";
 import ContactList from "./ContactList";
import { useEffect, useState } from "react";

function App() {
  const LOCAL_STORAGE_KEY ="contacts"
  const [contacts,setContacts]=useState([])

  const AddContactHandler = (name, email) => {
    setContacts(prevContacts => {
      const updatedContacts = [...prevContacts, {id:uuidv4(), name, email }];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const deleteCon=(id)=>{
    setContacts(contacts.filter((contact)=>{
      return contact.id != id ;
    }))
  }
  useEffect(() => {
    const retrievedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (retrievedContacts) {
      const parsedContacts = JSON.parse(retrievedContacts);
      setContacts(parsedContacts);
    }
  }, []);
  return (
    <>
     <div className="ui container">
    <Header/>
    <AddContact AddContactHandler={AddContactHandler}/>
    {
        contacts.length>0 ? <ContactList contacts={contacts} deleteContact={deleteCon}/> : <h1>NO CONTACTS TO SHOW</h1>
    }
     </div>
    </>
  );
}

export default App;
