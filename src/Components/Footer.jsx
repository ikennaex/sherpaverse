import React from 'react'
import { logo } from '../import'
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";



const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <div className='container mx-auto '>
        <div className='md:px-40 md:py-20 px-7 bg-gray-900 py-7'>
            <div className='flex items-center gap-2 text-white'>
                <img className='h-8' src= {logo} alt="" />
                <h3 className='text-md'>Sherpaverse LTD</h3>
            </div>
            
            <div className='text-white'>
                <p className='text-sm pt-2'>Plot 15, Orchid Rd. Off Chevron Toll Gate, Lekki Lagos</p>

                <p className='text-sm pt-2'>Ways to reach us</p>
                <div className='flex items-center gap-2 text-sm pt-2'>
                    <FaWhatsapp size={20}/>
                    <p>09057559292 </p>
                </div>
                <div className='flex items-center gap-2 text-sm pt-2'>
                    <MdOutlineMail size={20}/>
                    <p>info@sherpaverse.com </p>
                </div>

                <div className='flex items-center gap-2 text-sm pt-2'>
                    <a target='_blank' href="https://web.facebook.com/profile.php?id=61555161683538">
                    <FaFacebook  size={20}/>
                    </a>
                    
                    <a target='_blank' href="https://www.instagram.com/sherpaverseltd/">
                        <FaInstagram size={20} />
                    </a>
                </div>

                <p className='text-center text-sm my-7'>&copy; {year} Sherpaverse</p>
            </div>
        </div>
    </div>
  )
}

export default Footer