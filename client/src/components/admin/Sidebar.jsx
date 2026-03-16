import React from 'react'
import { NavLink } from 'react-router'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div>
        <NavLink>
            <img src={assets.home_icon} alt="" className='min-w-4 w-5'></img>
            <p className='hidden md:inline-block '>Dashboard</p>
        </NavLink>
    </div>
  )
}

export default Sidebar