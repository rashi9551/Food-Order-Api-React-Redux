import { useContext, useState } from 'react'
import {LOGO_URL} from '../../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../utils/useOnlineStatus'
import userContext from './useContext'

const Header=()=>{
const {loggedInUser}=useContext(userContext)
const [stat,setStat]=useState(['Login'])
const onlineStat=useOnlineStatus()
    return (
        <div className="flex justify-between shadow-lg bg-pink-100">
            <div className="logo-container">
                <img className="w-[155px] " src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-4 cursor-pointer'>online:{onlineStat==false?"🚫":"✅"}</li>
                    <li className='px-4 cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='px-4 cursor-pointer'><Link to="/about">About Us</Link></li>
                    <li className='px-4 cursor-pointer'>Contact Us</li>
                    <li className='px-4 cursor-pointer'>Cart</li>
                    <li className='px-4 cursor-pointer' onClick={()=>{stat=== 'Login'?setStat('Logout'):setStat('Login')}}>{stat}</li>
                    <li className='px-4 cursor-pointer font-serif font-bold'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header