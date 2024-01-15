import React from 'react'
import Herosection from '../Components/Herosection'
import Welcomesection from '../Components/Welcomesection'
import Oursection from '../Components/Oursection'
import Woodensection from '../Components/Woodensection'
import Latestdealsection from '../Components/Latestdealsection'
import Festival from '../Components/Festival'
import Footersection from '../Components/Footersection'
import Tradingsection from '../Components/Tradingsection'
import Testinomalsection from '../Components/Testinomalsection'
import Loadersection from '../Components/Loadersection'
import Backtotop from '../Components/Backtotop'

const Homepage = () => {
  return (
    <div className=' max-w-[1920px] mx-auto'>
      <Loadersection/>
      <Backtotop/>
        <Herosection/>
        <Welcomesection/>
        <Tradingsection/>
        <Oursection/>
        <Woodensection/>
        <Latestdealsection/>
        <Festival/>
        <Testinomalsection/>
        <Footersection/>
    </div>
  )
}

export default Homepage