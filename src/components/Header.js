import React from 'react'
import { LOGO_URL } from '../assets/resourceLinks'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../assets/useOnlineStatus'

function Header() {
  const [btnName, setbtnName] = useState('login')

  const onlineStatus = useOnlineStatus()
  return (
    <div className= "flex justify-between p-4 bg-orange-50 "  >
        <div className=" ">
            <img src={LOGO_URL}
             alt="logo-img" className="w-12 " />
        </div>
        <div className="p-4">
            <ul className="flex flex-wrap font-bold ">
                <li className="m-2 ">onlineStatus : {onlineStatus ? "🟢"  :"🔴"  }</li>
                <li className="m-2 hover:underline hover:translate-y-1 hover:text-orange-400"><Link to='/'>Home</Link></li>
                <li className="m-2 hover:underline hover:translate-y-1 hover:text-orange-400"><Link to='/about'>AboutUs</Link></li>
                <li className="m-2 hover:underline hover:translate-y-1 hover:text-orange-400"><Link to='/contact'>ContactUs</Link></li>
                <li className="m-2 hover:underline hover:translate-y-1 hover:text-orange-400"><Link to='/groceries'>Groceries</Link></li>
                <li className="m-2 hover:underline hover:translate-y-1 hover:text-orange-400">Cart</li>
                <button  className=" hover:bg-orange-400 hover:text-white shadow-sm rounded-md w-32" onClick={()=>{
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