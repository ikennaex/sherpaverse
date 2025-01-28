import React from 'react'
import Herosection from '../../Components/Herosection'
import Countries from '../../Components/Countries'
import Whoarewe from '../../Components/Whoarewe'
import Services from '../../Components/Services'

const Homepage = () => {
  return (
    <div className=''>
        <Herosection />
        <Countries />
        <Whoarewe />
        <Services />
    </div>
  )
}

export default Homepage