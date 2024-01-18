import React from 'react'
import Navbar from '../Components/Navbar'
import Footersection from '../Components/Footersection'
import Loadersection from '../Components/Loadersection'
import Backtotop from '../Components/Backtotop'
import Oursection from '../Components/Oursection'
const About = () => {
    return (
        <div>
            <Backtotop />
            <div className='bg-[#2C3847]'><Navbar /></div>
            <Oursection />
            <Footersection />
        </div>
    )
}

export default About