import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
const Header = () => {
  return (
    <div className='flex justify-between felx-row w-full h-[30px] bg-[#3389c6] '>
      <div className='flex flex-row items-center'>
        <HiOutlineMail className='text-black text-2xl m-2'/>
        <h3>vu09097@gmail.com</h3>
      </div>
      <div className='flex flex-row items-center' style={{paddingRight: 20}}>
        <FaPhoneAlt className='text-black text-2xl ' />
        <h3>0392705586</h3>
      </div>
    </div>
  )
}

export default Header