import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import SideNavbar from '../components/SideNavbar';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [openSideNav,SetOpenSideNav] = useState(false);

  const handleSideNav = () => {
    SetOpenSideNav(!openSideNav)
  }

  return (
    <>
    <nav className='bg-red-600 text-white flex flex-wrap sticky top-0 items-center justify-between p-3 overflow-auto z-50'>
      <span onClick={()=>{handleSideNav()}} className='cursor-pointer'>
        <Avatar src='https://i.redd.it/ld34wnxr71fb1.jpg' sx={{width:35,height:35}} />
      </span>
      <Link to='/' className='text-xl font-semibold'>
        Zombato🧟ysys
      </Link>
      <Link to='/login' className='bg-red-700 hover:bg-red-800 text-white px-5 py-1 rounded-full border transition-all duration-500'>
        login
      </Link>
    </nav>

    {
      openSideNav &&
      <SideNavbar handleSideNav={handleSideNav} />
    }
   

    </>
  )
}

export default Navbar