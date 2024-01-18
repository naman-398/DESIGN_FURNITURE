import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Commonbtn from '../Commonbtn/Commonbtn'
import sofa1 from "../Images/sofa1.webp";
import sofa2 from "../Images/sofa2.webp";
import sofa3 from "../Images/sofa3.webp";
import sofa4 from "../Images/sofa4.webp";
import sofa5 from "../Images/sofa5.webp";
import sofa6 from "../Images/sofa6.webp";
import { Star } from '../commonsvg/Icon';
const mycardinfo = [

    {
        
        img: sofa1
    },
    {
        img: sofa2
    },
    {
        img: sofa3
    },
    {
        img: sofa4
    },
    {
        img: sofa5
    },
    {
        img: sofa6
    },
]
const Oursection = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
      }, [])
    const mycard = mycardinfo.map((mycard) => (
        <div className=' w-full sm576:w-1/2 lg:w-1/3 px-3 pt-[10px] sm:pt-[42px]'>
        <div className='p-[10px_23px_40px_10px] md:p-[18px_23px_53px_23px] lg:p-[18px_10px_53px_10px] min-[1200px]:p-[18px_23px_53px_23px] max-w-[422px] max-h-[483px] w-full h-full duration-300 cursor-pointer hover:shadow-[6px_13px_38px_0px] hover:shadow-[#0000001f] mx-auto lg:mx-0'  data-aos='zoom-in'>
            <img src={mycard.img} alt="" />
            <div className=' flex items-center justify-between mt-[19px]'>
                <p className=' font-medium font-poppins text-[20px] text-[#000]'>Single Sofa</p>
                <div className=' flex items-center gap-[3px]'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
            </div>
            <p className=' text-[#000000b3] text-[18px] font-normal font-poppins leading-[normal] mt-[16px]'>Lorem ipsum dolor </p>
            <div className=' flex items-center justify-between pt-[16px]'>
                <p className=' font-poppins text-[23.667px] md:text-[28.667px] font-semibold text-[#000]'>₹ 1200.00</p>
                <Commonbtn padding=' !text-[14px] !p-[10px_10px] md:!p-[10px_12px] !font-medium hover:!shadow-[inset_.5rem_0_0_0]' text='ADD TO CART'/>
            </div>
        </div>
    </div>
    ))
    return (
        <div className=' max-w-[1341px] mx-auto px-3 pt-[60px] sm576:pt-[80px] md:pt-[100px] lg992:pt-[135px] pb-[60px] sm:pb-[80px] md:pb-[110px] lg:pb-[169px] overflow-hidden'>
            <div className=' flex items-center xs450px:flex-row  flex-col gap-[2px]  xs450px:gap-[11px]'  data-aos='zoom-in'>
                <hr className=' max-w-[95px] w-full h-[1px] bg-[#000000] border-t-[unset]' />
                <p className=' font-poppins text-[20px] font-normal text-[#BD7D41] leading-[normal]'>Shopping&nbsp;Store</p>
            </div>
            <div className=' flex justify-between sm576:flex-row  flex-col items-center w-full mt-[11px]'>
                <p className=' font-poppins text-[32px] xs450px:text-[35px] text-[#243040] font-bold max-w-[436px] leading-[normal]'  data-aos='zoom-in'>Our Products</p>
                <Commonbtn text='VIEW ALL PRODUCT'  data-aos='zoom-in' /></div>
            <div className="flex flex-wrap flex-row -mx-3 md:pt-[48px]">
              {mycard}
            </div>

        </div>
    )
}

export default Oursection