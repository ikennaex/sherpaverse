import React from 'react'
import { heroimg, whychooseimg } from '../import'

const Whychooseus = () => {
    const reasons = [
        {
            index: "01",
            title: "Tailored Experiences",
            desc: "We create personalized solutions for luxury travel, visas, education, and tourism to meet your unique needs."
        },
        {
            index: "02",
            title: "Expert Guidance",
            desc: "Our team of professionals ensures a seamless journey, from planning to execution, with attention to every detail."
        },
        {
            index: "03",
            title: "Diverse Services",
            desc: "From bespoke travel to professional training (TEFL/TESOL) and M.I.C.E. tourism, we offer comprehensive solutions under one roof."
        },
    ]
  return (
    <div id='whychooseus' className='container mx-auto relative'>
      <div className='flex justify-center'>
        <div className='md:h-120 h-190 flex items-center justify-center overflow-hidden'>
          <img className='md:w-500 object-cover w-lvh h-full' src= {whychooseimg} alt="" />
          <div class="absolute inset-0 bg-red-950 opacity-60"></div>
        </div>

        <div className='md:px-40 md:py-20 absolute top-1 w-full px-7'>
        <div className="text-center flex justify-center items-center py-7">
        <div className="h-1 w-1/2 bg-red-600"></div>
        <h2 className="text-2xl w-full text-white">Why Choose Sherpaverse</h2>
        <div className="h-1 w-1/2 bg-red-600"></div>
      </div>

      <p className='text-center text-white leading-none'>There are numerous reason why people choose SERPAVERSE and have never regretted there decision</p>

      <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-7'>
            {reasons.map(reason => (
                <div className='' key={reason.index}>
                    <div className='flex flex-col items-center justify-center py-5 bg-white text-black text-center'>
                        <h3 className='text-xl'>{reason.index}</h3>
                        <h4 className='text-lg'>{reason.title}</h4>
                        <p className='text-sm text-gray-600'>{reason.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
        </div>

    </div>
    </div>
  )
}

export default Whychooseus