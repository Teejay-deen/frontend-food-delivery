import React, { useState } from 'react'
import "./NavBar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const NavBar = ({setShowLogin}) => {

    const [ menu, setMenu] = useState("Home")


  return (
    <div className='nav-bar '>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("Home")} className={menu==="Home" ? "active " : ""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu" ? "active " : ""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App" ? "active " : ""}>Mobile-App</a>
            <a href='#footer' onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us" ? "active " : ""}>Contact-Us</a>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>

            <button onClick={()=>setShowLogin(true)} className=''>Sign In</button>
        </div>
    </div>
  )
}

export default NavBar