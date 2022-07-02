import React from 'react'
import logo from '../images/logo.svg'
// import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container header-con">
      <nav>
        <div className='header-img'><img src={logo} alt="logo" /></div>
        <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
        </ul>
      </nav>
      <div>
          <button className='login'>Login</button>
          <button className='signup'>Sign Up</button>
      </div>
      </div>
    
    </header>
  )
}

export default Header
