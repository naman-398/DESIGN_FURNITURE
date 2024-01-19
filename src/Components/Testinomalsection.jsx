import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay'
import { Controller, EffectFade, Thumbs, Autoplay } from 'swiper/modules';
import image1 from '../Images/testoimg1.webp'
import image2 from '../Images/testoimg2.webp'
import image3 from '../Images/testoimg3.webp'
import image4 from '../Images/testoimg4.webp'
import image5 from '../Images/testoimg5.webp'
import image6 from '../Images/testoimg6.webp'
import image7 from '../Images/testoimg7.png'
const Testinomalsection = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2500,
            }
        );
      }, [])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const SlideData = [
        { img: image1, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image2, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image3, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image4, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image5, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image6, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image7, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image1, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image2, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image3, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image4, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image5, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image6, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img: image7, name: "Treepi Shoty", work: "Teacher", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
       

    ]
    return (
        <div className=' mx-auto px-3 max-w-[1320px] md:pt-[30px] overflow-hidden'>
            <div className=' flex items-center xs450px:flex-row  flex-col gap-[2px]  xs450px:gap-[11px]'  data-aos='zoom-in'>
                <hr className=' max-w-[95px] w-full h-[1px] bg-[#000000] border-t-[unset]' />
                <p className='text-[#BD7D41] text-lg sm:text-xl font-poppins font-normal text-center sm:text-start' data-aos='zoom-out'>Customer Says</p>
            </div>
            <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-poppins font-bold max-w-[436px] mt-3 leading-normal ' data-aos='zoom-out'>Testimonial</h2>
            <div className='mt-[51px] mb-12 sm:mb-16 md:mb-20 lg:mb-[109px]'>
                <div data-aos='zoom-out'>
                    <Swiper loop={false}     autoplay={{delay: 500,disableOnInteraction: true}} spaceBetween={55} breakpoints={{ 300: { slidesPerView: 2.5, }, 400: { slidesPerView: 3, }, 600: { slidesPerView: 4, }, 700: { slidesPerView: 5, }, 1024: { slidesPerView: 7, }, }} centeredSlides={true} slidesPerView={1} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[Controller, Thumbs]} className="mySwiper2">
                        {
                            SlideData.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <img src={items.img} alt="img" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='sm:mt-5'>
                    <Swiper onSwiper={setThumbsSwiper} centeredSlides={true} loop={false} spaceBetween={10} slidesPerView={1} watchSlidesProgress={true}  modules={[EffectFade, Thumbs]} className="mySwiper" >
                        {
                            SlideData.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <h2 className='text-black text-lg font-poppins font-semibold pt-2 leading-normal text-center' data-aos='zoom-out'>{items.name}</h2>
                                    <p className='text-[#4D4D4D] text-xs font-poppins pt-1 font-light leading-normal text-center' data-aos='zoom-out'>{items.work}</p>
                                    <p className='text-black font-poppins font-light leading-normal text-sm mt-3 max-w-[350px] mx-auto text-center' data-aos='zoom-out'>{items.bio}</p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testinomalsection
