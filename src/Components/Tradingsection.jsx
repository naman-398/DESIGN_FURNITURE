import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slider1Nxtarrow, Slider1prevarrow, Star } from '../commonsvg/Icon';
import slider1 from '../Images/slider1img1.webp'
import slider2 from '../Images/slider1img2.webp'
import slider3 from '../Images/slider1img3.webp'
const CustomPrev1Arrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-[44px] h-[44px] rounded-[10px] duration-300 flex items-center justify-center  bg-[#fff]  absolute  left-[38%] lg992:left-[0%] bottom-[-10%] lg992:bottom-0 xl:bottom-[5%] lg1500:bottom-[15%]  sliderbtnhover hover:bg-[#000] " data-aos='fade-right'>
        <Slider1prevarrow />
    </button>
);

const CustomNxtArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-[44px] h-[44px] rounded-[10px] bg-[#fff] flex items-center justify-center duration-300  absolute left-[55%] xs450px:left-[49%] lg992:left-[7%] xl:left-[4%] bottom-[-10%] lg992:bottom-0 xl:bottom-[5%] lg1500:bottom-[15%]  sliderbtnhover hover:bg-[#000] "  data-aos='fade-right'>
        <Slider1Nxtarrow />
    </button>
);
const Tradingsection = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
      }, [])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        prevArrow: <CustomPrev1Arrow />,
        nextArrow: <CustomNxtArrow />,
        responsive: [

            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <div className=' overflow-hidden'>
            <div className="bg-[#f7f7f8] mt-[60px] sm576:mt-[80px] md:mt-[100px] lg992:mt-[266px] relative pt-[40px] pb-[98px]">
                <div className=' max-w-[500px] lg:max-w-[641px] xl:max-w-[741px] max-h-[317px] lg:max-h-[417px] w-full h-full absolute bg-[linear-gradient(180deg,#243040_0%,#8B929B_100%)] right-0 z-[0] top-[-16%] lg:top-[-24%] hidden lg992:block'  data-aos='fade-left'></div>
                <div className="max-w-[1590px]  px-3 lg992:ps-3 mx-auto lg992:mx-0 lg992:ms-auto ">
                    <div className="flex flex-row justify-center flex-wrap   -mx-3  relative">
                        <div className=" lg992:w-1/3 px-3 relative z-0 lg992:pt-[40px] lg:pt-0" data-aos='fade-right'>
                            <div className="flex flex-col xs450px:flex-row items-center justify-center  lg992:justify-start  gap-2 xs450px:gap[11px]">
                                <hr className="w-[95px] h-[1px] bg-black border-t-[unset]" />
                                <p className="text-xl font-poppins font-normal  leading-[normal] text-[#BD7D41]">
                                    Shopping Store
                                </p>
                            </div>
                            <p className="lg992:max-w-[426px] text-center lg992:text-start font-bold font-poppins  leading-[normal] text-[30px] min-[1100px]:text-[35px] text-[#243040] lg:pt-[24px] " data-aos='fade-right'>
                                Buy trending furniture Products.
                            </p>
                            <p className="text-lg font-normal lg992:text-start  max-w-[422px] text-black leading-normal font-poppins md:pt-[19px] text-center mx-auto lg992:mx-0" data-aos='fade-right'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                faucibus, urna at pulvinar porta
                            </p>
                        </div>
                        <div className=" lg992:w-8/12 px-3 overflow-hidden mx-auto mt-[30px] lg992:mt-0 slider1 ">
                            <Slider {...settings}>
                                <div className='relative z-[2] min-[400px]:pl-[21px]' data-aos='fade-left'>
                                    <div className=" p-[15px_12px_27px_17px]  bg-[#fff] shadow-crd_sh_1 duration-500 mt-4">
                                        <div className=" w-full">
                                            <img className="w-full" src={slider1} alt="" />
                                        </div>
                                        <div className="flex justify-between pt-[13px] items-center">
                                            <p className=" font-poppins text-nowrap font-medium text-[#000] leading-normal not-italic text-[20px] ">
                                                Single Sofa
                                            </p>
                                            <div>
                                                <div className=' flex items-center gap-[3px]'>
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' flex items-center gap-[6px]'>
                                            <p className=" font-poppins text-nowrap font-semibold text-[#000] text-[24px] leading-[normal] xl:text-[28.6px] not-italic pt-[8px]">
                                                ₹1200.00{" "}
                                            </p>
                                            <p className=' text-[#C4C4C4] font-poppins text-[11.636px] font-normal leading-[normal] mt-[10px]'>₹ 1200.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative z-[2] min-[400px]:pl-[21px]' data-aos='fade-left'>
                                    <div className=" p-[15px_12px_27px_17px]  bg-[#fff] shadow-crd_sh_1 duration-500 mt-4">
                                        <div className=" w-full">
                                            <img className="w-full" src={slider2} alt="" />
                                        </div>
                                        <div className="flex justify-between pt-[13px] items-center">
                                            <p className=" font-poppins text-nowrap font-medium text-[#000] leading-normal not-italic text-[20px] ">
                                                Single Sofa
                                            </p>
                                            <div>
                                                <div className=' flex items-center gap-[3px]'>
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' flex items-center gap-[6px]'>
                                            <p className=" font-poppins text-nowrap font-semibold text-[#000] text-[24px] leading-[normal] xl:text-[28.6px] not-italic pt-[8px]">
                                                ₹1200.00{" "}
                                            </p>
                                            <p className=' text-[#C4C4C4] font-poppins text-[11.636px] font-normal leading-[normal] mt-[10px]'>₹ 1200.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative z-[2] min-[400px]:pl-[21px]' data-aos='fade-left'>
                                    <div className=" p-[15px_12px_27px_17px]  bg-[#fff] shadow-crd_sh_1 duration-500 mt-4">
                                        <div className=" w-full">
                                            <img className="w-full" src={slider3} alt="" />
                                        </div>
                                        <div className="flex justify-between pt-[13px] items-center">
                                            <p className=" font-poppins text-nowrap font-medium text-[#000] leading-normal not-italic text-[20px] ">
                                                Single Sofa
                                            </p>
                                            <div>
                                                <div className=' flex items-center gap-[3px]'>
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' flex items-center gap-[6px]'>
                                            <p className=" font-poppins text-nowrap font-semibold text-[#000] text-[24px] leading-[normal] xl:text-[28.6px] not-italic pt-[8px]">
                                                ₹1200.00{" "}
                                            </p>
                                            <p className=' text-[#C4C4C4] font-poppins text-[11.636px] font-normal leading-[normal] mt-[10px]'>₹ 1200.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative z-[2] min-[400px]:pl-[21px]' data-aos='fade-left'>
                                    <div className=" p-[15px_12px_27px_17px]  bg-[#fff] shadow-crd_sh_1 duration-500 mt-4">
                                        <div className=" w-full">
                                            <img className="w-full" src={slider1} alt="" />
                                        </div>
                                        <div className="flex justify-between pt-[13px] items-center">
                                            <p className=" font-poppins text-nowrap font-medium text-[#000] leading-normal not-italic text-[20px] ">
                                                Single Sofa
                                            </p>
                                            <div>
                                                <div className=' flex items-center gap-[3px]'>
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' flex items-center gap-[6px]'>
                                            <p className=" font-poppins text-nowrap font-semibold text-[#000] text-[24px] leading-[normal] xl:text-[28.6px] not-italic pt-[8px]">
                                                ₹1200.00{" "}
                                            </p>
                                            <p className=' text-[#C4C4C4] font-poppins text-[11.636px] font-normal leading-[normal] mt-[10px]'>₹ 1200.00</p>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tradingsection