import React from 'react'
import Herosection from '../../Components/Herosection'
import Countries from '../../Components/Countries'
import Whoarewe from '../../Components/Whoarewe'
import Services from '../../Components/Services'
import Whychooseus from '../../Components/Whychooseus'
import Whatpeoplesay from '../../Components/Whatpeoplesay'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'

const Homepage = () => {
  return (
    <div className=''>
        <Herosection />
        <Countries />
        <Whoarewe />
        <Services />
        <Whychooseus />
        <Whatpeoplesay />
        <Contact />
        <Footer />
    </div>
  )
}

export default Homepage