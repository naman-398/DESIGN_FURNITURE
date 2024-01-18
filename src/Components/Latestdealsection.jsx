import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import slider2img1 from "../Images/slider2img1.webp";
import slider2img2 from "../Images/slider2img2.webp";
import slider2img3 from "../Images/slider2img3.webp";
import { Nxtbutton, Prevbutton, Star } from '../commonsvg/Icon';
import Commonbtn from '../Commonbtn/Commonbtn';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const CustomPrevArrow = (props) => {
    return (
        <button {...props} className=" rounded-full shadow-[#00000014] shadow-[2px_7px_16px] !hidden min-[470px]:!flex justify-between items-center p-[22px_10px] min-[1550px]:p-[42px_29px] bg-[#FFF] absolute min-[1450px]:top-[38%] top-[-15%] left-[55%] min-[550px]:left-[65%] min-[900px]:left-[75%] min-[1450px]:left-[-5%] min-[1550px]:left-[-8%] z-[1] sliderbtnhover duration-300 hover:bg-[#000] ">
            <Prevbutton/>
        </button>
    );
}

const CustomNextArrow = (props) => {
    return (
        <button {...props} className=" rounded-full shadow-[#00000014] shadow-[2px_7px_16px] !hidden min-[470px]:!flex justify-between items-center p-[22px_10px] min-[1550px]:p-[42px_29px] absolute bg-[#FFF] top-[-15%] min-[1450px]:top-[38%] right-[10%] min-[1450px]:right-[-5%] min-[1550px]:right-[-8%] z-[1] sliderbtnhover duration-300 hover:bg-[#000] ">
            <Nxtbutton />
        </button>
    );
}
const Latestdealsection = () => {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    speedAutoplay: 2000,
                },
            },
        ]
    };
    return (
        <div className=" overflow-hidden">
        <div className=' max-w-[1341px] mx-auto px-3 pt-[45px] pb-[60px] sm576:pb-[80px] md:pb-[100px] lg992:pb-[138px]'>
            <div className=' flex items-center xs450px:flex-row flex-col gap-[2px] xs450px:gap-[11px]' data-aos='zoom-out'>
                <hr className=' max-w-[95px] w-full h-[1px] bg-[#000000] border-t-[unset]' />
                <p className=' font-poppins text-[20px] font-normal text-[#BD7D41] leading-[normal]'>Shopping Store</p>
            </div>
            <p className=' font-poppins text-[32px] xs450px:text-[35px] text-[#243040] font-bold max-w-[436px]  xs450px:mt-[19px] leading-[normal] text-center xs450px:text-start' data-aos='zoom-out'>Latest Deal</p>
            <Slider {...settings} className=' relative '>
                <div className=' min-[500px]:m-3 mx-auto latest' data-aos='zoom-out'>
                    <div className=' p-[18px_23px_53px_23px] bg-[#FFF] max-w-[422px] max-h-[483px] w-full h-full duration-300 hover:shadow-[6px_13px_38px_0px] hover:shadow-[#0000001F]'>
                        <img src={slider2img1} alt="" />
                        <div className=' flex items-center justify-between mt-[19px]'>
                            <p className=' font-medium font-poppins text-[20px] text-[#000]'>Single Sofa</p>
                            <div className=' flex items-center gap-[3px]'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                        </div>
                        <p className=' text-[#000000b3] text-[18px] font-normal font-poppins leading-[normal] mt-[16px]'>Lorem ipsum dolor </p>
                        <div className=' flex items-center justify-between pt-[16px]'>
                            <p className=' font-poppins text-[23.667px] md:text-[28.667px] font-semibold text-[#000]'>₹ 1200.00</p>
                            <Commonbtn padding=' !text-[14px] !p-[10px_10px] md:!p-[10px_12px] !font-medium hover:!shadow-[inset_.5rem_0_0_0]' text='ADD TO CART' />
                        </div>
                    </div>
                </div>
                <div className=' min-[500px]:m-3 mx-auto latest' data-aos='zoom-out'>
                    <div className=' p-[18px_23px_53px_23px] bg-[#FFF] max-w-[422px] max-h-[483px] w-full h-full duration-300 hover:shadow-[6px_13px_38px_0px] hover:shadow-[#0000001F]'>
                        <img src={slider2img2} alt="" />
                        <div className=' flex items-center justify-between mt-[19px]'>
                            <p className=' font-medium font-poppins text-[20px] text-[#000]'>Single Sofa</p>
                            <div className=' flex items-center gap-[3px]'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                        </div>
                        <p className=' text-[#000000b3] text-[18px] font-normal font-poppins leading-[normal] mt-[16px]'>Lorem ipsum dolor </p>
                        <div className=' flex items-center justify-between pt-[16px]'>
                            <p className=' font-poppins text-[23.667px] md:text-[28.667px] font-semibold text-[#000]'>₹ 1200.00</p>
                            <Commonbtn padding=' !text-[14px] !p-[10px_10px] md:!p-[10px_12px] !font-medium hover:!shadow-[inset_.5rem_0_0_0]' text='ADD TO CART' />
                        </div>
                    </div>
                </div>
                <div className=' min-[500px]:m-3 mx-auto latest' data-aos='zoom-out'>
                    <div className=' p-[18px_23px_53px_23px] bg-[#FFF] max-w-[422px] max-h-[483px] w-full h-full duration-300 hover:shadow-[6px_13px_38px_0px] hover:shadow-[#0000001F]'>
                        <img src={slider2img3} alt="" />
                        <div className=' flex items-center justify-between mt-[19px]'>
                            <p className=' font-medium font-poppins text-[20px] text-[#000]'>Single Sofa</p>
                            <div className=' flex items-center gap-[3px]'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                        </div>
                        <p className=' text-[#000000b3] text-[18px] font-normal font-poppins leading-[normal] mt-[16px]'>Lorem ipsum dolor </p>
                        <div className=' flex items-center justify-between pt-[16px]'>
                            <p className=' font-poppins text-[23.667px] md:text-[28.667px] font-semibold text-[#000]'>₹ 1200.00</p>
                            <Commonbtn padding=' !text-[14px] !p-[10px_10px] md:!p-[10px_12px] !font-medium hover:!shadow-[inset_.5rem_0_0_0]' text='ADD TO CART' />
                        </div>
                    </div>
                </div>
                <div className=' min-[500px]:m-3 mx-auto latest' data-aos='zoom-out'>
                    <div className=' p-[18px_23px_53px_23px] bg-[#FFF] max-w-[422px] max-h-[483px] w-full h-full duration-300 hover:shadow-[6px_13px_38px_0px] hover:shadow-[#0000001F]'>
                        <img src={slider2img1} alt="" />
                        <div className=' flex items-center justify-between mt-[19px]'>
                            <p className=' font-medium font-poppins text-[20px] text-[#000]'>Single Sofa</p>
                            <div className=' flex items-center gap-[3px]'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                        </div>
                        <p className=' text-[#000000b3] text-[18px] font-normal font-poppins leading-[normal] mt-[16px]'>Lorem ipsum dolor </p>
                        <div className=' flex items-center justify-between pt-[16px]'>
                            <p className=' font-poppins text-[23.667px] md:text-[28.667px] font-semibold text-[#000]'>₹ 1200.00</p>
                            <Commonbtn padding=' !text-[14px] !p-[10px_10px] md:!p-[10px_12px] !font-medium hover:!shadow-[inset_.5rem_0_0_0]' text='ADD TO CART' />
                        </div>
                    </div>
                </div>
                <div className=' min-[500px]:m-3 mx-auto latest' data-aos='zoom-out'>
                    <div className=' p-[18px_23px_53px_23px] bg-[#FFF] max-w-[422px] max-h-[483px] w-full h-full duration-300 hover:shadow-[6px_13px_38px_0px] hover:shadow-[#0000001F]'>
                        <img src={slider2img2} alt="" />
                        <div className=' flex items-center justify-between mt-[19px]'>
                            <p className=' font-medium font-poppins text-[20px] text-[#000]'>Single Sofa</p>
                            <div className=' flex items-center gap-[3px]'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                        </div>
                        <p className=' text-[#000000b3] text-[18px] font-normal font-poppins leading-[normal] mt-[16px]'>Lorem ipsum dolor </p>
                        <div className=' flex items-center justify-between pt-[16px]'>
                            <p className=' font-poppins text-[23.667px] md:text-[28.667px] font-semibold text-[#000]'>₹ 1200.00</p>
                            <Commonbtn padding=' !text-[14px] !p-[10px_10px] md:!p-[10px_12px] !font-medium hover:!shadow-[inset_.5rem_0_0_0]' text='ADD TO CART' />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
        </div>
    )
}

export default Latestdealsection