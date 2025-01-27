import React from 'react'
import {logo} from "../import"
const Navbar = () => {
    const menuItems = [
        "Home","About", "Services", "Contact"
    ]
  return (
    <div className='container mx-auto p-4'>
        <div className='flex items-center justify-start'>
        <img className='h-12' src= {logo} alt="" />
        <div className='hidden gap-20 mx-auto md:flex'>
            {menuItems.map(menu => (
                    <p className='nav-menu'>{menu}</p>
            ))}
        </div>

        </div>
    </div>
  )
}

export default Navbar