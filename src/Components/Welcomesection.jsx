import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import s2_img from "../Images/s2-img1.webp";
import Commonbtn from '../Commonbtn/Commonbtn';
const videoUrl = 'https://www.youtube.com/watch?v=mw01mY7llHQ&ab_channel=SSKFURNITURE';
const Welcomesection = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
    }, [])
    const [showModal1, setShowModal1] = useState(false);
    const openModal1 = () => {
        setShowModal1(true);
    };
    const closeModal = () => {
        setShowModal1(false);
    };
    if (showModal1 === true) { document.body.classList.add('overflow-hidden') }
    else { document.body.classList.remove('overflow-hidden') }
    return (
        <div className=' max-w-[1341px] mx-auto px-3 pt-[134px] overflow-hidden'>
            {showModal1 && (
                <div className=' fixed w-full h-full top-[0%] start-0 flex justify-center items-center z-[5] backdrop-blur-md' onClick={closeModal}>
                    <video  className=" max-w-[400px] max-h-[400px] w-full h-full" controls>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </div>)}
            <div className=' flex flex-wrap flex-row -mx-3'>
                <div className='w-full lg992:w-1/2 px-3'>
                    <div className=' relative max-w-[456px] max-h-[498px] mx-auto z-0'><img src={s2_img} alt="" className=' h-full w-full relative z-[0] cursor-pointer' data-aos='fade-right' onClick={openModal1} />
                        <div className=' absolute max-w-[416px] max-h-[336px] w-full h-full bg-[linear-gradient(270deg,#8c939b_0%,#243040_100%)] bg-[#000] top-[-64px] left-[-50px] z-[-1]' data-aos='fade-right'></div></div>
                </div>
                <div className='w-full lg992:w-1/2 px-3'>
                    <div className=' max-w-[596px] mx-auto' data-aos='fade-left'>
                        <div className=' flex items-center xs450px:flex-row flex-col  xs450px:gap-[11px] gap-[2px] justify-center lg992:justify-start'>
                            <hr className=' max-w-[95px] w-full h-[1px] bg-[#000000] border-t-[unset]' />
                            <p className=' font-poppins text-[20px] font-normal text-[#BD7D41] leading-[normal]' data-aos='fade-left'>Welcome Our Story</p>
                        </div>
                        <p className=' font-poppins text-[32px] xs450px:text-[35px] text-[#243040] font-bold max-w-[436px]  xs450px:mt-[19px] leading-[normal] text-center lg992:text-start mx-auto lg992:mx-0' data-aos='fade-left'>We create the product you tell us you wish existed.</p>
                        <p className=' font-poppins text-[16px] xs450px:text-[18px] font-normal max-w-[596px] text-[#000000b3] mt-[5px] sm576:mt-[19px] leading-[normal] text-center lg992:text-start' data-aos='fade-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                        <div className=' pt-[34px] text-center lg992:text-start' data-aos='fade-left'><Commonbtn padding=' !hover:text-[#BD7D41]' text='READ MORE' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcomesection