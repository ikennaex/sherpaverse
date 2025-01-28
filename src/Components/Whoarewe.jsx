import React from 'react'
import { whoareweimg } from '../import'

const whoarewe = () => {
  return (
    <div className='container mx-auto py-7 px-7'>
        <div className='text-center flex justify-center items-center py-7'>
          <div className='h-2 w-1/2 bg-red-600'></div>
            <h2 className='text-2xl w-full'>Who are we</h2>
            <div className='h-2 w-1/2 bg-red-600'></div>
        </div>

        <div>
          <img src= {whoareweimg} alt="" />
          <p className='text-justify'>Sherpaverse Ltd is a travel concierge startup specializing in luxury travel, visa assistance, study abroad, M.I.C.E. tourism, leisure tourism, and professional TEFL/TESOL training. We craft personalized experiences to make every journey seamless and unforgettable.</p>
        </div>
    </div>
  )
}

export default whoarewe