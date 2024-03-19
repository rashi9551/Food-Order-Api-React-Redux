import { useContext, useState } from 'react'
import {LOGO_URL} from '../../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../utils/useOnlineStatus'
import userContext from './useContext'
import { useSelector } from 'react-redux'
import "./index.css"

const Header=()=>{
const {loggedInUser}=useContext(userContext)
const [stat,setStat]=useState(['Login'])
const onlineStat=useOnlineStatus()
const cart=useSelector((store)=>store.cart.items)
    return (
        <div className="nav flex justify-between shadow-lg 100">
            <div className="logo-container">
                <img className="w-[101px] " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1B0JvDebWcD_zNIeBbEwagQNtILCHr7BH0g&usqp=CAU" />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-4 cursor-pointer'>online:{onlineStat==false?"🚫":"✅"}</li>
                    <li className='px-4 cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='px-4 cursor-pointer'><Link to="/about">About Us</Link></li>
                    <li className='px-4 cursor-pointer'>Contact Us</li>
                    <li className='px-4 cursor-pointer mb-1 font-bold text-xl'><Link to={'/cart'}>Cart -  ({cart.length} items)</Link></li>
                    <li className='px-4 cursor-pointer' onClick={()=>{stat=== 'Login'?setStat('Logout'):setStat('Login')}}>{stat}</li>
                    <li className='px-4 cursor-pointer font-serif font-bold'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header