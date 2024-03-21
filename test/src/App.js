import React, { useState } from 'react'
import Navbar from './components/propsDrilling/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/propsDrilling/Home'
import Contact from './components/propsDrilling/Contact' 
function App() {

  return (
    <div>
      < Router>
       <Navbar/>
       <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
      </Router>
    </div>
  )
}

export default App