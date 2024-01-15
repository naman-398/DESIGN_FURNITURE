import React from 'react'

const Commonbtn = (props) => {
  return (
    <div>
<button className={`${props.padding} font-poppins text-[16px] sm:text-[20px] text-[#FFF] font-semibold p-[10px_32px] sm:p-[19px_48px] shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_1.5rem_0_0_0_#243040] duration-300 border-[2px] border-[transparent] hover:border-[#243040] hover:text-[#243040]`}>{props.text}</button>
    </div>
  )
}

export default Commonbtn