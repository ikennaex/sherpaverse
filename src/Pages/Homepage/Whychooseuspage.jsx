import React from 'react'
import "./whychooseuspage.css"

export const reasons = [
    {
        index: "01",
        title: "Tailored to You",
        desc: "We analyze your profile to create a custom travel, visa, education, or tourism plan that aligns perfectly with your goals."
    },
    {
        index: "02",
        title: "Trusted Expertise",
        desc: "With 6+ years of industry experience, we provide reliable, high-quality services backed by deep knowledge and proven success."
    },
    {
        index: "03",
        title: "Hassle-Free Execution",
        desc: "From planning to completion, our team ensures a stress-free experience, handling every detail with precision."
    },
    {
        index: "04",
        title: "Exclusive Global Access",
        desc: "Our strong international partnerships grant you outstanding services, VIP benefits, and world-class experiences."
    },
    {
        index: "05",
        title: "Comprehensive Solutions",
        desc: "From study abroad, luxury travel to M.I.C.E. tourism and TEFL/TESOL training, we offer everything you need in one place."
    },
    {
        index: "06",
        title: "Commitment to Excellence",
        desc: "We prioritize quality, integrity, and customer satisfaction, delivering exceptional experiences every time."
    },

]

const Whychooseuspage = () => {
  return (
    <div className='container mx-auto'>
      <div className='lg:px-40 p-7'>

      <div className="text-center flex justify-center items-center">
        <div className="h-1 w-1/2 bg-red-600"></div>
        <h2 className="text-2xl w-full text-black">Why Choose Sherpaverse</h2>
        <div className="h-1 w-1/2 bg-red-600"></div>
      </div>

        {reasons.map((reason) => {
            return (
                <div className='mt-7' key={reason.index}>
                    <div className='flex flex-col slide-in-right items-center justify-center py-5 px-5 bg-stone-200 text-black text-center mb-6 rounded-3xl'>
                        <h3 className='text-xl text-red-600 font-bold'>{reason.index}</h3>
                        <h4 className='text-lg font-bold'>{reason.title}</h4>
                        <p className='text-sm text-gray-600'>{reason.desc}</p>
                    </div> 
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Whychooseuspage
