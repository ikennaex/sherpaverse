import React from 'react'

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
    <div className='container mx-auto pb-7 px-7'>
      <div className="text-center flex justify-center items-center py-7">
        <div className="h-2 w-1/2 bg-red-600"></div>
        <h2 className="text-2xl font-bold w-full">What People say about Us</h2>
        <div className="h-2 w-1/2 bg-red-600"></div>
      </div>

      <div>
        {testimonials.map((item) => {
            return (
              <div className="flex justify-center items-center py-5 ">
                <div className="h-10 w-10 rounded-full bg-red-600"></div>
                <p className="text-gray-800 ml-5">{item.testimonial}</p>
                <p className="text-gray-600 ml-5 font-bold">{item.name}</p>
              </div>
            )
  
        })}
      </div>
      </div>
  )
}

export default Whatpeoplesay