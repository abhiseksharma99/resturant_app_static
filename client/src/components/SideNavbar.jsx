import React from 'react';
import '../App.css';
import Avatar from '@mui/material/Avatar';
import { LiaHomeSolid } from "react-icons/lia";
import { PiHeartStraight } from "react-icons/pi";
import { CiViewList,CiLogin,CiLogout } from "react-icons/ci";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import {Link} from 'react-router-dom';


const SideNavbar = ({handleSideNav}) => {
  return (
    <>
    
    <div onClick={()=>{handleSideNav()}} className='fixed w-full h-full top-0 z-50' style={{backgroundColor:'rgb(16,16,13,0.8)'}}>
    <div className='bg-white w-[70%] md:w-[22%] h-full p-2 SIDENAV-LOGIX overflow-auto'>
    <div className='py-2 flex justify-center cursor-pointer'>
      <Link to='/myprofile' >
       <Avatar src='https://i.redd.it/ld34wnxr71fb1.jpg' sx={{width:45,height:45}} />
      </Link>
    </div>
    <div>
     <ul className='text-center p-2 cursor-pointer'>
      <Link to='/'>
        <li className='hover:bg-gray-100 transition-all duration-500 py-4 rounded-lg my-2 flex justify-center items-center gap-1'>
          <span className='text-xl'><LiaHomeSolid/></span>
          <span>Home</span>
        </li>
        </Link>
        <Link to='/resturants'>
        <li className='hover:bg-gray-100 transition-all duration-500 py-4 rounded-lg my-2 flex justify-center items-center gap-1'>
        <span className='text-xl'><BiDish/></span>
        <span>Start Ordering</span>
        </li>
        </Link>
        <Link to='/myfavourites'>
        <li className='hover:bg-gray-100 transition-all duration-500 py-4 rounded-lg my-2 flex justify-center items-center gap-1'>
        <span className='text-xl'><PiHeartStraight/></span>
        <span>My Favourites</span>
        </li>
        </Link>
        <Link to='/myorders'>
        <li className='hover:bg-gray-100 transition-all duration-500 py-4 rounded-lg my-2 flex justify-center items-center gap-1'>
        <span className='text-xl'><CiViewList/></span>
        <span>My Orders</span>
        </li>
        </Link>
        <Link to='/termsofuse'>
        <li className='hover:bg-gray-100 transition-all duration-500 py-4 rounded-lg my-2 flex justify-center items-center gap-1'>
        <span className='text-xl'><FaEnvelopeOpenText/></span>
        <span>Terms of use</span>
        </li>
        </Link>
        <Link to='/privacypolicy'>
        <li className='hover:bg-gray-100 transition-all duration-500 py-4 rounded-lg my-2 flex justify-center items-center gap-1'>
        <span className='text-xl'><MdOutlinePrivacyTip/></span>
        <span>Privacy Policy</span>
        </li>
        </Link>
        <Link to='/login'>
        <li className='hover:bg-gray-100 transition-all duration-500 py-4 rounded-lg my-2 flex justify-center items-center gap-1'>
        <span className='text-xl'><CiLogin/></span>
        <span>Login</span>
        </li>
        </Link>
     </ul>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default SideNavbar