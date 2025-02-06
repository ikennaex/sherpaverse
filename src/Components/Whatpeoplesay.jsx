import React from 'react'
import FadeIn from './fadein'

const Whatpeoplesay = () => {
    const testimonials = [
        {
            testimonial: "I was initially overwhelmed by the thought of applying for a visa to visit Nigeria from the United States. However, SherpaVerse Ltd made the entire process smooth and stress-free. Their expert guidance, prompt assistance, and personalized approach ensured that every detail was handled efficiently. I received my visa on time, and the entire experience exceeded my expectations. I highly recommend SherpaVerse Ltd for anyone in need of reliable visa processing services",
            name: "Adrienne Marchaund Clarke, United States of America"
        },
        {
            testimonial: "SherpaVerse Ltd made studying in Malaysia possible. Their expert guidance streamlined the entire process, and now I’m thriving academically. Thank you!",
            name: "Busari Adebowale, Malaysia"
        },
        {
            testimonial: "Thanks to SherpaVerse Ltd, I’m now going to study in Finland. Their seamless guidance made the process incredibly easy. Highly recommended",
            name: "Ezekiel Ademola, Nigeria"
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

      <div className='flex overflow-scroll'>
        {testimonials.map((item) => {
            return (
              <FadeIn duration = {100} >
              <div className="lg:flex-col lg:items-start w-lvw flex gap-4 flex-col justify-center items-center py-5 ">
                <div className="lg:h-5 lg:w-3 h-3 w-10 rounded-full bg-red-600"></div>
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