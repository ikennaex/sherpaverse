import React from 'react'
import { heroimg, whychooseimg } from '../import'
import { Link } from 'react-router'
import { IoIosMore } from 'react-icons/io'
import { reasons } from '../Pages/Homepage/Whychooseuspage'
import FadeIn from './fadein'

const Whychooseus = () => {
    // const reasons = [
    //     {
    //         index: "01",
    //         title: "Tailored to You",
    //         desc: "We analyze your profile to create a custom travel, visa, education, or tourism plan that aligns perfectly with your goals."
    //     },
    //     {
    //         index: "02",
    //         title: "Trusted Expertise",
    //         desc: "With 6+ years of industry experience, we provide reliable, high-quality services backed by deep knowledge and proven success."
    //     },
    //     {
    //         index: "03",
    //         title: "Hassle-Free Execution",
    //         desc: "From planning to completion, our team ensures a stress-free experience, handling every detail with precision."
    //     },

    // ]
  return (
    <div id='whychooseus' className=' relative'>
      <div className='flex justify-center'>
        
        <div className='lg:h-190 h-215 flex items-center justify-center overflow-hidden'>
          <img className='lg:w-500 object-cover w-500 h-full' src= {whychooseimg} alt="" />
          <div class="absolute inset-0 bg-red-950 opacity-60"></div>
        </div>

        <div className='container mx-auto lg:px-40 lg:py-20 absolute top-1 w-full px-7'>
        <FadeIn duration= {100}>
        <div className="text-center flex justify-center items-center py-7">
        <div className="h-1 w-1/2 bg-red-600"></div>
        <h2 className="text-2xl w-full text-white">Why Choose Sherpaverse</h2>
        <div className="h-1 w-1/2 bg-red-600"></div>
      </div>
      </FadeIn>

      <p className='text-center text-white leading-none'>At Sherpaverse, we craft seamless, personalized experiences designed around your unique needs. With our expertise, global partnerships, and a commitment to excellence, we ensure every journey is smooth, exclusive, and unforgettable.</p>

      <div>
        {/* for mobile */}
        <div className='lg:hidden grid grid-cols-1 lg:grid-cols-3 gap-5 py-7'>
            {reasons.slice(0,3).map(reason => (
                <div className='' key={reason.index}>
                  <FadeIn duration ={100} >
                    <div className='flex flex-col items-center justify-center py-5 px-5 bg-white text-black text-center'>
                        <h3 className='text-xl text-red-600 font-bold'>{reason.index}</h3>
                        <h4 className='text-lg font-bold'>{reason.title}</h4>
                        <p className='text-sm text-gray-600'>{reason.desc}</p>
                    </div> 
                    </FadeIn>
                </div>
            ))}
        </div>

        {/* For desktop  */}
        <div className=' hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-5 py-7'>
            {reasons.map(reason => (
                <div className='' key={reason.index}>
                    <div className='flex flex-col items-center justify-center py-5 px-5 bg-white text-black text-center'>
                        <h3 className='text-xl text-red-600 font-bold'>{reason.index}</h3>
                        <h4 className='text-lg font-bold'>{reason.title}</h4>
                        <p className='text-sm text-gray-600'>{reason.desc}</p>
                    </div> 
                </div>
            ))}
        </div>
    <Link className='flex justify-center' to = "/whychooseus" >
        <button className="lg:rounded-2xl lg:px-10 cursor-pointer flex gap-2 items-center bg-red-600 p-4 rounded-3xl font-bold text-white">
        <IoIosMore size={27}/>
          See more
        </button>
        </Link>
      </div>
        </div>

    </div>

    </div>
  )
}

export default Whychooseus