import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Facebook, Instagram, Pagelogo, Twitter } from '../commonsvg/Icon'

const Footersection = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2500,
            }
        );
      }, [])
    return (
        <div className=' bg-[#243040] pt-[30px] sm576:pt-[40px] sm:pt-[65px] md:pt-[87px] overflow-hidden'>
            <div className=' max-w-[1341px] mx-auto px-3'>
                <div className=' flex flex-wrap flex-row -mx-3 justify-between'>
                    <div className=' w-full sm:w-5/12 md:w-1/3 px-3'>
                        <div className=' flex items-center gap-[7.47px] cursor-pointer' data-aos='zoom-out'>
                            <Pagelogo />
                            <p className=' font-roboto text-[20px] sm:text-[33px] font-bold text-[#FFF]'>FURNITURE</p>
                        </div>
                        <p className=' font-roboto font-normal text-[14px] text-[#FFF] pt-[10px] lg992:pt-[30px] max-w-[338px] leading-[normal]' data-aos='zoom-out'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.</p>
                        <div className=' flex items-center pt-[8px] sm576:pt-[23px] gap-[12.49px] cursor-pointer' data-aos='zoom-out'>
                           <a href="https://www.instagram.com/" target='_blank'  className=' duration-300 hover:translate-y-[-5px]'><Instagram /></a> 
                            <a href='https://twitter.com/login?lang=en' target='_blank' className=' w-[23px] h-[23px] duration-300 hover:translate-y-[-5px] rounded-full border-[1px] border-[#FFF] flex justify-center items-center'>
                                <Twitter />
                            </a>
                            <a href="https://www.facebook.com/" target='_blank' className=' duration-300 hover:translate-y-[-5px]'><Facebook /></a>
                        </div>
                    </div>
                    <div className='w-full sm:w-7/12 md:w-1/2 lg992:w-5/12 px-3'>
                        <div className=' flex flex-wrap flex-row -mx-3 mt-5 sm:mt-0 lg:mt-[-10px]'>
                            <div className=' w-1/3 px-3'>
                                <ul className=' flex flex-col gap-[4px] xs450px:gap-[13px]'>
                                    <li data-aos='zoom-out' className=' mb-[10px] relative after:absolute after:w-full after:max-w-[130px] after:h-[1px] after:bg-[#BD7D41] after:left-0 after:duration-300 after:bottom-[-4px] hover:after:w-0 hover:after:left-[50%]'><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-medium' data-aos='zoom-out'>ABOUT STORE</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Home</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Shop</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Product</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Festival Offer</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Log In</a></li>
                                </ul>
                            </div>
                            <div className=' w-1/3 px-3'>
                                <ul className=' flex flex-col gap-[4px] xs450px:gap-[13px]'>
                                    <li data-aos='zoom-out' className=' mb-[10px] relative after:absolute after:w-full after:max-w-[130px] after:h-[1px] after:bg-[#BD7D41] after:left-0 after:duration-300 after:bottom-[-4px] hover:after:w-0 hover:after:left-[50%]'><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-medium' data-aos='zoom-out'>BRANDS</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Album</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Shop</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Product</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Festival Offer</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Log In</a></li>
                                </ul>
                            </div>
                            <div className=' w-1/3 px-3'>
                                <ul className=' flex flex-col gap-[4px] xs450px:gap-[13px]'>
                                    <li data-aos='zoom-out' className=' mb-[10px] relative after:absolute after:w-full after:max-w-[130px] after:h-[1px] after:bg-[#BD7D41] after:left-0 after:duration-300 after:bottom-[-4px] hover:after:w-0 hover:after:left-[50%]'><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-medium' data-aos='zoom-out'>CATEGORIES</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Single</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Aleeper Sofas</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Accent Chairs</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Festival Offer</a></li>
                                    <li data-aos='zoom-out' className=''><a href="" className=' font-roboto text-[#fff] text-[12px] xs450px:text-[14px] font-normal  relative after:absolute after:w-0 after:h-[2px] after:bg-[#BD7D41] after:left-[50%] after:duration-300 after:bottom-[-4px] hover:after:w-full hover:after:left-0' data-aos='zoom-out'>Log In</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr  className=' w-full h-[1px] bg-[#91979F] mt-[30px] sm576px:mt-[50px] sm:mt-[81px]'/>
            <p className=' font-roboto text-[#fff] text-[14px] font-normal text-center py-[15px] sm576:py-[27px]'>@copyright2024</p>
        </div>
    )
}

export default Footersection