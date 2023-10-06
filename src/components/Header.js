import React from 'react'
import { LOGO_URL } from '../assets/resourceLinks'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [btnName, setbtnName] = useState('login')
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <img src={LOGO_URL}
             alt="logo-img" className='logo-image'/>
        </div>
        <div className='nav-items-container'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>AboutUs</Link></li>
                <li><Link to='/contact'>ContactUs</Link></li>
                <li >Cart</li>
                <button onClick={()=>{
                  {btnName === "login" ? setbtnName('logout'): setbtnName('login')}
                }}>
                  {btnName}
                </button>
            </ul>
        </div>
    </div>
  )
}

export default Header