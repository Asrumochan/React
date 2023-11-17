import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
      <Link to="/home" className='navbar-brand'>Company Logo</Link>
      <div className='ml-auto'>
         <ul className='navbar-nav'>
              <li><Link to="./home" className='nav-link'>Home</Link></li>
              <li><Link to="./about"  className='nav-link'>About</Link></li>
              <li><Link to="./contact"  className='nav-link'>Contact Us</Link></li>
              <li><Link to="./login"  className='nav-link'>Login</Link></li>
         </ul>
      </div>
 </nav> 
    )
  }
}

export default navbar
