import React from 'react'
import { heroimg } from '../import'
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./herosection.css"

const Herosection = () => {

  const images = [
    {
      imgUrl: "https://img.freepik.com/premium-photo/suitcase-with-famous-monuments-isolated-with-clouds-famous-buildings-landmarks-towers-travel_741269-8.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid",
      alt: "Travel img",
    },
    {
      imgUrl: "https://img.freepik.com/free-photo/woman-checking-map-autumn-travel-destination_23-2148634143.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_incoming",
      alt: "Travel img",
    },
    {
      imgUrl: "https://img.freepik.com/free-photo/trendy-looking-african-american-tourist-with-backpack-hat-sunglasses-studying-directions-using-city-guide-while-exploring-sights-landmarks-resort-town_273609-952.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_incoming",
      alt: "Travel img",
    },
    {
      imgUrl: "https://img.freepik.com/premium-photo/untitled-design-5_1210786-40.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid",
      alt: "Travel img",
    },
  ]
  return (
    <div className=' '>
      <div className='flex justify-center '>
        {/* this is the image background before  */}
        {/* <div className='lg:h-lvh lg:w-full md:h-auto h-135 flex items-center justify-center overflow-hidden'>
          <img className='object-cover w-full h-full' src= {heroimg} alt="" />
        
          <div class="absolute inset-0 bg-black opacity-80"></div>
        </div> */}

        <div className='lg:px-10 lg:flex-row container mx-auto px-7 bg-gray-900 h-fit p-27 flex flex-col gap-5 justify-around'>

          <div className = "lg:w-160" >
            <p className = "text-red-600 font-bold">WELCOME TO SHERPAVERSE LTD</p>
        <h2 className='lg:text-5xl  leading-tighest font-black text-3xl text-white pb-6  slide-in-bottom'>ELEVATING TRAVEL CONCIERGE SERVICES IN NIGERIA…</h2>
        <p className='lg:text-sm  text-white lg:w-120 slide-in-left'>At Sherpaverse, inspired by the legendary Sherpas of the Himalayas - your trusted guides to extraordinary journeys, we specialize in delivering seamless, tailor-made travel concierge experiences designed to meet your unique needs. Through our expertise, global partnerships, and commitment to excellence, we ensure every journey is smooth, exclusive, and truly unforgettable.</p>

        <div className='pt-9 flex items-center gap-6 slide-in-left2'>
          <a target='_blank' href="https://wa.me/2349057559292">
          <button className='lg:rounded-2xl lg:px-8 flex gap-2 items-center bg-red-600 p-4 rounded-2xl font-bold text-white'>
          <FaWhatsapp size={27} />
            Chat us</button>
          </a>
          <button className=' lg:rounded-2xl lg:px-8 flex gap-2 items-center border-red-600 hover:bg-red-600 border-2 p-4 rounded-2xl font-bold text-white'>
          <MdOutlineMail size={27} />
            Email us</button>
        </div>
          </div>

        {/* Images  */}
        <div className='grid grid-cols-2'>
          {images.map((image, index) => (
            <div key={index} className='flex justify-center'>
              <img className='object-cover pr-2 lg:h-55 lg:pt-0 h-37 pt-5 w-80 slide-in-blurred-bottom' src={image.imgUrl} alt={image.alt} />
            </div>
          ))}
        </div>
        </div>


  
    </div>
    </div>
  )
}

export default Herosection