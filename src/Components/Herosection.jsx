import React from 'react'
import Navbar from './Navbar'
import Commonbtn from '../Commonbtn/Commonbtn'

const Herosection = () => {
    return (
        <div className=' bg-[url(../src/Images/herobgimg.webp)]  min-[1200px]:min-h-screen bg-no-repeat bg-cover bg-right lg992:bg-100%' >
            <Navbar />
            <div className=' max-w-[1341px] mx-auto px-3 py-[75px] sm:py-[100px] lg992:py-[140px] min-[1200px]:py-[unset]'>
                <h1 className=' font-poppins max-w-[908px] font-bold xs450px:text-[30px] text-[26px] sm576:text-[40px] sm:text-[46px] lg992:text-[48px] text-[#FFF] text-center mx-auto min-[1200px]:pt-[164px] leading-[normal]'>Awesome Design Best Furniture For Your Interior</h1>
                <p className=' font-poppins text-[14px] xs450px:text-[17px] sm576:text-[18px] md:text-[20px] text-center text-[#fff] pt-[5px] sm576:pt-[15px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
                <div className=' text-center sm576px:mt-[51px] mt-[30px] '> <Commonbtn padding=' hover:border-[#FFFFFF] hover:text-[#FFF] hover:!shadow-[inset_1.5rem_0_0_0_#FFFFFF]' text='SHOP NOW' /></div>
            </div>
        </div>
    )
}

export default Herosection