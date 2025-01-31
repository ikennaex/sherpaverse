import React from 'react'
import FadeIn from './fadein'

const Whatpeoplesay = () => {
    const testimonials = [
        {
            testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae veniam officiis placeat libero omnis sed quo voluptatum, amet impedit?",
            name: "John Doe"
        },
        {
            testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae veniam officiis placeat libero omnis sed quo voluptatum, amet impedit?",
            name: "John Doe"
        },
    ]
  return (
    <div id='testimonials' className='lg:px-40 lg:py-20 container mx-auto pb-7 px-7'>
      <FadeIn duration = {100} >
      <div className="text-center flex justify-center items-center py-7">
        <div className="h-1 w-1/2 bg-red-600"></div>
        <h2 className="text-2xl w-full">What People say about Us</h2>
        <div className="h-1 w-1/2 bg-red-600"></div>
      </div>
      </FadeIn>

      <div>
        {testimonials.map((item) => {
            return (
              <FadeIn duration = {100} >
              <div className="lg:flex-col lg:items-start flex justify-center items-center py-5 ">
                <div className="lg:h-5 lg:w-3 h-10 w-10 rounded-full bg-red-600"></div>
                <p className="text-gray-800 ml-5">{item.testimonial}</p>
                <p className="text-gray-600 ml-5 font-bold">{item.name}</p>
              </div>
              </FadeIn>
            )
  
        })}
      </div>
      </div>
  )
}

export default Whatpeoplesay