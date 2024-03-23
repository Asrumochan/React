 import Header from "./Header";
 import AddContact from "./AddContact";
 import ContactList from "./ContactList";

function App() {
  const contacts =[
    {
      id:"1",
      name:"Asru",
      email:"asru@gmail.com",
    },
    {
      id:"1",
      name:"Sital",
      email:"padhi.sital@gmail.com",
    }
  ]
  return (
    <>
     <div className="ui container">
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/>
     </div>
    </>
  );
}

export default App;
