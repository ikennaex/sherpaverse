import React from 'react'
import Herosection from '../../Components/Herosection'
import Countries from '../../Components/Countries'
import Whoarewe from '../../Components/Whoarewe'
import Services from '../../Components/Services'
import Whychooseus from '../../Components/Whychooseus'

const Homepage = () => {
  return (
    <div className=''>
        <Herosection />
        <Countries />
        <Whoarewe />
        <Services />
        <Whychooseus />
    </div>
  )
}

export default Homepage