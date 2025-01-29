import React, { useRef, useState } from 'react'
import {logo} from "../import"
import { Link } from 'react-router'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const menuItems = [
      {
        name: "About Us",
        link: "/about-us"
      },
      {
        name: "Services",
        link: "#services"
      },
      {
        name: "Why choose Us",
        link: "#whychooseus"
      },
      {
        name: "Testimonials",
        link: "#testimonials"
      },
    ]

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className='flex justify-around container mx-auto p-4'>
        <div className='lg:py-5 flex items-center justify-between'>
        <Link to = "/" >
        <img className='lg:h-18 lg:mr-60 h-12' src= {logo} alt="" />
        </Link>
        <div className='hidden gap-20 mx-auto lg:flex'>
            {menuItems.map(menu => (
                    <p className='nav-menu'>{menu.name}</p>
            ))}
        </div>

        <div className='lg:hidden' onClick={toggle}>
          {open? <IoClose  size={40} className='menu-icon' /> : <IoIosMenu size={40} className='menu-icon' /> }
        </div>



        </div>
        <div>
            {open && 
          <div className='flex flex-col gap-5 py-5'>
            {menuItems.map((menu) => {
              return (
                <div className='border-b'>
                <a href= {menu.link} className='nav-link'>
                  {menu.name}
                </a>
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