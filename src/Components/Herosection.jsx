import React from 'react'
import { heroimg } from '../import'
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router';


const Herosection = () => {
  return (
    <div className='container mx-auto relative'>
      <div className='flex justify-center'>
        <div className='h-135 flex items-center justify-center overflow-hidden'>
          <img className='object-cover w-full h-full' src= {heroimg} alt="" />
        
          <div class="absolute inset-0 bg-black opacity-80"></div>
        </div>

        <div className='absolute top-1/3 px-7'>
        <h2 className='font-black text-3xl text-white pb-6 text-center'>SHERPAVERSE LTD</h2>
        <p className='text-white text-center'>Sherpaverse Ltd is a travel concierge startup offering bespoke concierge services in luxury travel, visa assistance, study abroad, and M.I.C.E. tourism, leisure tourism and trainings</p>

        <div className='pt-6 flex items-center justify-center gap-6'>
          <button className='flex gap-2 items-center bg-red-600 p-4 rounded-3xl font-bold text-white'>
          <FaWhatsapp size={27} />
            Chat us</button>
          <button className=' flex gap-2 items-center bg-red-600 p-4 rounded-3xl font-bold text-white'>
          <MdOutlineMail size={27} />
            Email us</button>
        </div>
        </div>

  
    </div>
    </div>
  )
}

export default Herosection