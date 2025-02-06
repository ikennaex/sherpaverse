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
        link: "/whychooseus"
      },
      {
        name: "Testimonials",
        link: "#testimonials"
      },
      {
        name: "Blog",
        link: "/blog"
      },
    ]

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className='container mx-auto px-9 py-4'>
        <div className='lg:py-0.5 flex items-center justify-between'>
        <Link to = "/" >
        <img className='lg:h-15 lg:mr-60 h-12' src= {logo} alt="" />
        </Link>
        <div className='hidden gap-20 mx-auto lg:flex cursor-pointer'>
            {menuItems.map(menu => (
              menu.link.includes("#") ? 
              <a href={menu.link} className='nav-link'>
              <p className='nav-menu hover:text-red-600'>{menu.name}</p>
              {/* {menu.name} */}
            </a>

              :
              <Link to={menu.link} className='nav-link'>
                <p className='nav-menu hover:text-red-600'>{menu.name}</p>
                {/* {menu.name} */}
              </Link>

              // <a href= {menu.link}>
              // </a>
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
              menu.link.includes("#") ? 
              <a href={menu.link} className='nav-link'>
              {menu.name}
              {/* {menu.name} */}
            </a>

              :
              <Link to={menu.link} className='nav-link'>
                {menu.name}
                {/* {menu.name} */}
              </Link>
              )

              
            })}
          </div>
          }
        </div>
    </div>

  )
}

export default Navbar