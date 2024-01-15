import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Commonbtn from '../Commonbtn/Commonbtn'

const Festival = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
      }, [])
  return (
    <div className=' max-w-[1341px] mx-auto px-3 pb-[45px] sm:pb-[65px] md:pb-[85px] lg:pb-[106px] overflow-hidden'>
        <div className=' flex flex-wrap flex-row -mx-3'>
            <div className=' w-full sm:w-1/2 px-3'>
                <div className=' bg-[url(../src/Images/festivalimg1.webp)] p-[32px_25px_71px_0px] max-w-[642px] w-full overflow-hidden bg-cover bg-left'  data-aos='fade-right'>
                    <p className=' text-[#000] text-[20px] font-normal font-poppins flex items-center gap-[12px]'>
                    <hr className=' max-w-[60px] lg992:max-w-[95px] w-full h-[1px] bg-[#000] border-t-[unset]' />
                    Festival Offer
                   </p>
                    <p className=' text-[#BD7D41] text-[30px] md:text-[35px] font-poppins font-bold leading-[normal] pt-20px] pl-[70px] lg992:pl-[107px]'>Upto 40% Off</p>
                    <p className=' text-[#000000B2] font-poppins text-[15px] md:text-[18px] font-normal max-w-[262px] leading-[normal] pt-[15px] ml-[70px] lg992:ml-[107px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className=' pt-[38px] pl-[70px] lg992:pl-[107px]'><Commonbtn padding=' !font-medium !p-[10px_13px] hover:!shadow-[inset_.5rem_0_0_0]' text="ADD TO CART"/></div>
                </div>
            </div>
            <div className=' w-full sm:w-1/2 px-3 pt-3 sm:pt-0'>
                <div className=' bg-[url(../src/Images/festivalimg2.webp)] p-[32px_25px_71px_0px] max-w-[642px] w-full overflow-hidden bg-cover bg-right' data-aos='fade-left'>
                    <p className=' text-[#000] text-[20px] font-normal font-poppins flex items-center gap-[12px]'>
                    <hr className=' max-w-[60px] lg992:max-w-[95px] w-full h-[1px] bg-[#000] border-t-[unset]' />
                    Festival Offer
                   </p>
                    <p className=' text-[#BD7D41] text-[30px] md:text-[35px] font-poppins font-bold leading-[normal] pt-20px] pl-[70px] lg992:pl-[107px]'>Upto 40% Off</p>
                    <p className=' text-[#000000B2] font-poppins text-[15px] md:text-[18px] font-normal max-w-[262px] leading-[normal] pt-[15px] ml-[70px] lg992:ml-[107px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className=' pt-[38px] pl-[70px] lg992:pl-[107px]'><Commonbtn padding=' !font-medium !p-[10px_13px] hover:!shadow-[inset_.5rem_0_0_0]' text="ADD TO CART"/></div>
                </div>
            </div>
        
       
        </div>

    </div>
  )
}

export default Festival