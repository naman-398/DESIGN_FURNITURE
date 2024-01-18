import React from 'react'
import Navbar from '../Components/Navbar'
import Footersection from '../Components/Footersection'
import Loadersection from '../Components/Loadersection'
import Backtotop from '../Components/Backtotop'
import Woodensection from '../Components/Woodensection'


const Shop = () => {
    return (
        <div>
            <Backtotop />
            <div className='bg-[#2C3847]'><Navbar /></div>
            <Woodensection />
            <div className=' mt-10'><Footersection /></div>
        </div>
    )
}

export default Shop