import React from 'react'
import Navbar from '../Components/Navbar'
import Footersection from '../Components/Footersection'
import Testinomalsection from '../Components/Testinomalsection'
import Loadersection from '../Components/Loadersection'
import Backtotop from '../Components/Backtotop'
const Contact = () => {
  return (
    <div>
        <Backtotop/>
         <div className='bg-[#2C3847]'><Navbar/></div>
        <div className=' pt-5'><Testinomalsection/></div>
        <Footersection/>
    </div>
  )
}

export default Contact