import { useState } from 'react'
import {LOGO_URL} from '../../utils/constants'
import { Link } from 'react-router-dom'

const Header=()=>{
const [stat,setStat]=useState(['Login'])
    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={()=>{stat=== 'Login'?setStat('Logout'):setStat('Login')}}>{stat}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header