import React from 'react'
import Herosection from '../../Components/Herosection'
import Countries from '../../Components/Countries'
import Whoarewe from '../../Components/Whoarewe'

const Homepage = () => {
  return (
    <div className=''>
        <Herosection />
        <Countries />
        <Whoarewe />
    </div>
  )
}

export default Homepage