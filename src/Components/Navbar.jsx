import React, { useState } from 'react'
import { Addcarticon, Pagelogo, Serchicon } from '../commonsvg/Icon'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false)
  function mobile() {
    setShow(!show)
    if (show === false) {
      document.body.classList.add('overflow_hidden')
    }
    else {
      document.body.classList.remove('overflow_hidden')
    }
  }
  const [data, setdata] = useState(false);
  function InputImg() {
    const newColor = data === "xyz" ? "otherColor" : "xyz";
    setdata(newColor);
  }
  return (
    <div>
      <nav className=' max-w-[1341px] mx-auto px-3 pt-[15px]'>
        <div className=' flex items-center justify-between'>
          <div className=' flex items-center gap-[7.47px] cursor-pointer'>
            < Pagelogo />
            <p className=' font-roboto text-[20px] sm:text-[33px] font-bold text-[#FFF]'>FURNITURE</p>
          </div>
          <div className=' flex items-center gap-[15px] sm:gap-[25px] lg992:gap-[30px] xl:gap-[40px]'>
            <div className={`${show === true ? "left-0" : "left-[-100%]"} flex items-center gap-[35px] lg992:gap-[45px] xl:gap-[55px] mobile-view`}>
              <Link onClick={mobile} to='/' className=' text-[18px] text-[#FFF] font-normal font-roboto relative duration-300 after:w-0 after:duration-300 webkitstroke after:bg-[#BD7D41] after:h-[3px] after:absolute after:left-[50%] after:bottom-[-12px] hover:after:w-full hover:after:left-0'>HOME</Link>
              <Link onClick={mobile} to='/about' className=' text-[18px] text-[#FFF] font-normal font-roboto relative duration-300 after:w-0 after:duration-300 webkitstroke after:bg-[#BD7D41] after:h-[3px] after:absolute after:left-[50%] after:bottom-[-12px] hover:after:w-full hover:after:left-0 '>ABOUT&nbsp;US</Link>
              <Link onClick={mobile} to='/shop' className=' text-[18px] text-[#FFF] font-normal font-roboto relative duration-300 after:w-0 after:duration-300 webkitstroke after:bg-[#BD7D41] after:h-[3px] after:absolute after:left-[50%] after:bottom-[-12px] hover:after:w-full hover:after:left-0'>SHOP</Link>
              <Link onClick={mobile} to='/contact' className=' text-[18px] text-[#FFF] font-normal font-roboto relative duration-300 after:w-0 after:duration-300 webkitstroke after:bg-[#BD7D41] after:h-[3px] after:absolute after:left-[50%] after:bottom-[-12px] hover:after:w-full hover:after:left-0 '>CONTACT&nbsp;US</Link>
            </div>
            <div className=' flex items-center gap-[15px] lg992:gap-[10px] xl:gap-[28px] relative'>
              <div className="flex items-center">
                <div
                  className={`${data === "xyz"
                      ? "right-100 z-10 px-3 border border-gray-200  bg-transparent"
                      : "px-1 right-0"
                    }  rounded-[8px] items-center max-[380px]:max-w-[280px]   w-full sm:static top-[35px] sm:top-[8%] md:top-0 max-[640px]:w-[300px] right-[-46%] xs450px:right-[100%] justify-between absolute  py-1 flex  lg:h-unset lg:static lg:right-0 lg:bg-transparent z-[2] transition-all ease-linear duration-300`}
                >
                  <input
                    type="search"
                    placeholder="Search Bar"
                    id="abc"
                    className={`${data === "xyz"
                        ? "max-[425px]:w-[100%] w-full duration-600"
                        : "w-0  duration-600"
                      } outline-none text-white bg-transparent font-medium  transition-all duration-500 `}
                  />
                </div>
                <span onClick={InputImg} className="group  cursor-pointer ps-3">
                  <Serchicon />
                </span>
              </div>
              <a href=""><Addcarticon /></a></div>
            <button onClick={mobile} className={`${show === false ? "rotate-90" : "rotate-360"} block lg992:hidden relative z-[6] font-bold text-[27px] text-[#FFF] hover:text-[#BD7D41] duration-300`}>{show === false ? "|||" : "X"}</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar