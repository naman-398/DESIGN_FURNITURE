import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Commonbtn from '../Commonbtn/Commonbtn'
import bigsofa from "../Images/bigsofa.webp";
const Woodensection = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
      }, [])
    return (
        <div className=' overflow-hidden'>
        <div className='bg-[#F7F7F8] pt-[75px] mb-[65px] relative'>
                            <div className=' max-w-[250px] sm450px:max-w-[341px] sm576:max-w-[541px] md:max-w-[400px] lg992:max-w-[541px] min-[1400px]:max-w-[741px] max-h-[150px] sm450px:max-h-[180px] sm576px:max-h-[270px] md:max-h-[200px] lg:max-h-[270px] w-full h-full bg-[#243040] z-[1] absolute top-[70%] sm576:top-[58%] right-[0] ' data-aos='fade-left'></div>
            <div className=' max-w-[1341px] px-3 mx-auto'>
                <div className=' flex flex-row flex-wrap -mx-3'>
                    <div className=' w-full md:w-5/12 lg992:w-1/3 px-3'>
                        <div className=' flex items-center xs450px:flex-row flex-col gap-[2px] xs450px:gap-[11px] justify-center md:justify-start' data-aos='fade-right'>
                            <hr className=' max-w-[95px] w-full h-[1px] bg-[#000000] border-t-[unset]' />
                            <p className=' font-poppins text-[20px] font-normal text-[#BD7D41] leading-[normal]'>Shopping Store</p>
                        </div>
                        <p className=' font-poppins text-[28px] lg:text-[31px] min-[1200px]:text-[35px] text-[#243040] font-bold max-w-[436px]  xs450px:mt-[19px] leading-[normal] text-center md:text-start mx-auto md:mx-0' data-aos='fade-right'>Wooden Sofa Starts From ₹&nbsp;1200.00</p>
                        <div className=' mt-[10px] mb-[15px] lg992:mb-0 lg992:mt-[53px] text-center md:text-start' data-aos='fade-right'><Commonbtn text='SHOP NOW' /></div>
                    </div>
                    <div className=' w-full md:w-7/12 lg992:w-4/6 px-3'>
                        <div className=' relative max-w-[745px] h-full mx-auto z-[2]'>
                            <img src={bigsofa} alt="bigsofa" className=' w-full h-full' data-aos='fade-left' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Woodensection