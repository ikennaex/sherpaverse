import React, { useRef, useState } from 'react'
import {logo} from "../import"
import { Link } from 'react-router'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const menuItems = [
      {
        name: "Home",
        link: ""
      },
      {
        name: "Who are we",
        link: ""
      },
      {
        name: "Services we render",
        link: ""
      },
      {
        name: "Why choose Sherpaverse",
        link: ""
      },
      {
        name: "What people say about us",
        link: ""
      },
    ]

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className='container mx-auto p-4'>
        <div className='flex items-center justify-between'>
        <Link to = "/" >
        <img className='h-12' src= {logo} alt="" />
        </Link>
        <div className='hidden gap-20 mx-auto md:flex'>
            {menuItems.map(menu => (
                    <p className='nav-menu'>{menu.name}</p>
            ))}
        </div>

        <div onClick={toggle}>
          {open? <IoClose  size={40} className='menu-icon' /> : <IoIosMenu size={40} className='menu-icon' /> }
        </div>



        </div>
        <div>
            {open && 
          <div className='flex flex-col gap-5 py-5'>
            {menuItems.map((menu) => {
              return (
                <div className='border-b'>
                <Link to={menu.link} className='nav-link'>
                  {menu.name}
                </Link>
                </div>
              )
            })}
          </div>
          }
        </div>
    </div>

  )
}

export default Navbar