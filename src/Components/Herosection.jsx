import React from 'react'
import { heroimg } from '../import'
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./herosection.css"
import { Link } from 'react-router';


const Herosection = () => {
  return (
    <div className=' relative'>
      <div className='flex justify-center'>
        <div className='lg:h-lvh lg:w-full md:h-auto h-135 flex items-center justify-center overflow-hidden'>
          <img className='object-cover w-full h-full' src= {heroimg} alt="" />
        
          <div class="absolute inset-0 bg-black opacity-80"></div>
        </div>

        <div className='lg:px-40 lg:top-1/4.5 container mx-auto absolute top-1/3 px-7 '>
        <h2 className='lg:text-6xl font-black text-3xl text-white pb-6 text-center slide-in-bottom'>SHERPAVERSE LTD</h2>
        <p className='lg:text-2xl text-white text-center slide-in-left'>Sherpaverse Ltd is a travel concierge startup offering bespoke concierge services in luxury travel, visa assistance, study abroad, and M.I.C.E. tourism, leisure tourism and trainings</p>

        <div className='pt-6 flex items-center justify-center gap-6'>
          <a target='_blank' href="https://wa.me/2349057559292">
          <button className='lg:rounded-2xl lg:px-8 flex gap-2 items-center bg-red-600 p-4 rounded-3xl font-bold text-white'>
          <FaWhatsapp size={27} />
            Chat us</button>
          </a>
          <button className=' lg:rounded-2xl lg:px-8 flex gap-2 items-center bg-red-600 p-4 rounded-3xl font-bold text-white'>
          <MdOutlineMail size={27} />
            Email us</button>
        </div>
        </div>

  
    </div>
    </div>
  )
}

export default Herosection