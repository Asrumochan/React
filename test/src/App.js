import React from 'react'
import Navbar from "./components/Routing/navbar"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Routing/home'
import About from './components/Routing/about'
import Contact from './components/Routing/contact'
import Login from './components/Routing/login'
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App