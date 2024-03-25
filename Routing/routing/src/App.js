import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home';
import User from './components/user';
import Register from './components/register';
import Login from './components/login';
import Root from './components/root';


const App = () => {

  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
  );
};

export default App;
