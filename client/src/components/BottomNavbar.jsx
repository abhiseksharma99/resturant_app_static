import React, { useState } from 'react';
import { LiaHomeSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { PiHeartStraight } from "react-icons/pi";
import { IoIosHeart } from "react-icons/io";
import { FaTableList } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import { BiDish,BiSolidDish } from "react-icons/bi";

const BottomNavbar = () => {

  const [active,setActive] = useState('');

  const handleActive = (value) => {
    setActive(value)
  }

  return (
    <>

    <div className='fixed bottom-0 bg-gray-50 md:hidden w-full py-2'>
      <div className='flex flex-wrap items-center justify-between px-6 text-3xl'>
       <Link onClick={()=>{handleActive('home')}} to='/'>
       {
        active === 'home' ? 
        <IoMdHome/>
          :
        <LiaHomeSolid/>
       }
       </Link>
       <Link onClick={()=>{handleActive('resturants')}} to='/resturants'>
       {
        active === 'resturants' ? 
        <BiSolidDish/>
          :
        <BiDish/>
       }
       </Link>
       <Link onClick={()=>{handleActive('myfavourites')}} to='/myfavourites'>
       {
        active === 'myfavourites' ? 
        <IoIosHeart/>
          :
        <PiHeartStraight/>
       }
       </Link>
       <Link onClick={()=>{handleActive('myorders')}} to='/myorders'>
       {
        active === 'myorders' ? 
        <FaTableList/>
          :
        <CiViewList/>
       }
       </Link>
       <Link onClick={()=>{handleActive('myprofile')}} to='/myprofile' className={active === 'myprofile' ?'border-2 border-red-500 rounded-full' : ''}>
       {
        active === 'myprofile' ?
        <Avatar src='https://i.redd.it/ld34wnxr71fb1.jpg' sx={{width:26,height:26}} />
         :
        <Avatar src='https://i.redd.it/ld34wnxr71fb1.jpg' sx={{width:30,height:30}} />
       }
       </Link>
      </div>
    </div>
    
    </>
  )
}

export default BottomNavbar