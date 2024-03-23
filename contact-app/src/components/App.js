 import Header from "./Header";
 import AddContact from "./AddContact";
 import ContactList from "./ContactList";
import { useEffect, useState } from "react";

function App() {
  const LOCAL_STORAGE_KEY ="contacts"
  const [contacts,setContacts]=useState([])
  
  const AddContactHandler = (name, email) => {
    setContacts(prevContacts => {
      const updatedContacts = [...prevContacts, { name, email }];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };
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
    <ContactList contacts={contacts}/>
     </div>
    </>
  );
}

export default App;
