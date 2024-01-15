import React, { useState } from 'react'
import { Addcarticon, Pagelogo, Serchicon } from '../commonsvg/Icon'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [show, setShow] = useState(false)
    function mobile() {
        setShow(!show)
        if (show === false) {
            document.body.classList.add('overflow-hidden')
        }
        else {
            document.body.classList.remove('overflow-hidden')
        }
    }
  return (
    <div>
        <nav className=' max-w-[1341px] mx-auto px-3 pt-[15px]'>
        <div className=' flex items-center justify-between'>
            <div className=' flex items-center gap-[7.47px] cursor-pointer'>
                < Pagelogo/>
                <p className=' font-roboto text-[20px] sm:text-[33px] font-bold text-[#FFF]'>FURNITURE</p>
            </div>
            <div className=' flex items-center gap-[15px] sm:gap-[25px] lg992:gap-[40px]'>
            <div className={`${show === true ? "left-0" : "left-[-100%]"} flex items-center gap-[35px] lg992:gap-[55px] mobile-view`}>
                    <Link className=' text-[18px] text-[#FFF] font-normal font-roboto relative duration-300 after:w-0 after:duration-300 webkitstroke after:bg-[#BD7D41] after:h-[3px] after:absolute after:left-[50%] after:bottom-[-12px] hover:after:w-full hover:after:left-0'>HOME</Link>
                    <Link className=' text-[18px] text-[#FFF] font-normal font-roboto relative duration-300 after:w-0 after:duration-300 webkitstroke after:bg-[#BD7D41] after:h-[3px] after:absolute after:left-[50%] after:bottom-[-12px] hover:after:w-full hover:after:left-0'>ABOUT US</Link>
                    <Link className=' text-[18px] text-[#FFF] font-normal font-roboto relative duration-300 after:w-0 after:duration-300 webkitstroke after:bg-[#BD7D41] after:h-[3px] after:absolute after:left-[50%] after:bottom-[-12px] hover:after:w-full hover:after:left-0'>SHOP</Link>
                    <Link className=' text-[18px] text-[#FFF] font-normal font-roboto relative duration-300 after:w-0 after:duration-300 webkitstroke after:bg-[#BD7D41] after:h-[3px] after:absolute after:left-[50%] after:bottom-[-12px] hover:after:w-full hover:after:left-0'>CONTACT US</Link>
                </div>
                <div className=' flex items-center gap-[15px] sm:gap-[28px]'>
                <a href="" ><Serchicon className=' hover:fill-[#BD7D41] duration-300 '/></a>
                <a href=""><Addcarticon/></a></div>
                <button onClick={mobile} className={`${show === false ? "rotate-90" : "rotate-360"} block md:hidden relative z-[6] font-bold text-[27px] text-[#FFF] hover:text-[#BD7D41] duration-300`}>{show === false ? "|||" : "X"}</button>   
                </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar