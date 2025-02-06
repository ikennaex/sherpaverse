import React from 'react'
import { conceirge, leisure, sporttourism, studyabroad, tourism, trainings, visa } from '../import'
import FadeIn from './fadein'

const Services = () => {
    const services = [
        {
            name:"Concierge Services",
            img: conceirge,
        },
        {
            name:"Visa Assistance",
            img: visa,
        },
        {
            name:"Leisure",
            img: leisure,
        },
        {
            name:"Study Abroad",
            img: studyabroad,
        },
        {
            name:"Tourism",
            img: tourism,
        },
        {
            name:"Trainings (TEFL/TESOL)",
            img: trainings,
        },
        {
            name:"Sport Tourism",
            img: sporttourism,
        },
    ]
  return (
    <div id='services' className='lg:px-40 lg:py-20 container mx-auto pb-16 px-7'>
      <div className="text-center flex justify-center items-center py-7">
        <div className="h-1 w-1/2 bg-red-600"></div>
        <h2 className="text-2xl w-full">Services we render</h2>
        <div className="h-1 w-1/2 bg-red-600"></div>
      </div>

      <div className="lg:gap-15 grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index}>
            <FadeIn duration = {100}>
            <div className=" bg-red-600 h-40">
              <img className="w-full h-26 object-cover" src={service.img} alt="" />
              <h3 className="text-white py-4 leading-none text-sm text-center ">{service.name}</h3>
            </div>
            </FadeIn>
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-10">
        <a href="#" className="btn btn-primary">Discover More</a>
      </div> */}
    </div>
  )
}

export default Services