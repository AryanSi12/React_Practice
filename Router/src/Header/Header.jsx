import React from 'react'
import { Link,NavLink } from 'react-router-dom'


function Header() {
  return (
    <nav className='flex p-3 justify-between items-center'>
        <div className="flex items-center gap-2">
        <img src="1.jpeg" className=' max-h-12 max-w-12 ' alt="" />
        <span className=' font-medium text-2xl '>DummySITE</span>
        </div>
        <div className="flex justify-center">
            <ul className='flex gap-14'>
                
                <li>
                    <NavLink to="/" className={({isActive})=>`font-medium text-xl ${isActive ? "text-orange-500" : "text-slate-600"} hover:text-orange-700`} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive})=>`font-medium text-xl ${isActive ? "text-orange-500" : "text-slate-600"}  hover:text-orange-700`}>
                    About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive})=>`font-medium text-xl ${isActive ? "text-orange-500" : "text-slate-600"}  hover:text-orange-700`}>
                    Contact Us
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/Visit" className={({isActive})=>`font-medium text-xl ${isActive ? "text-orange-500" : "text-slate-600"}  hover:text-orange-700`}>
                    Visit Us
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='gap-3 flex'>
        <button className=' hover:bg-sky-300 bg-sky-200 font-medium text-slate-600 border border-solid border-slate-500 px-5 py-2 rounded-lg'>
            Sign in
        </button>
        <button className=' hover:bg-orange-400 bg-orange-300 font-medium text-slate-600 border border-solid border-slate-500 px-5 py-2 rounded-lg'>
            Log in
        </button>
        </div>
    </nav>
  )
}

export default Header