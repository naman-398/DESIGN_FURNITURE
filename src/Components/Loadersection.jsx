import React, { useEffect, useState } from 'react'
import { Pagelogo1 } from '../commonsvg/Icon';

const Loadersection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true); 
            document.body.style.overflow = ''; 
        }, 2000); 

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <div>
            <div className=" duration-300 w-screen h-screen bg-black fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                <div className='flex items-center justify-center h-screen'>
                    <div className=' flex flex-col justify-center sm576:gap-[20px] items-center'>
                        <div data-aos='zoom-in'><Pagelogo1/></div>
                   <h1 className=' text-[#FFF] text-[30px] sm576:text-[50px] font-roboto font-black' data-aos="zoom-in">DESIGN_FURNITURE</h1>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Loadersection