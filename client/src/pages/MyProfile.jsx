import React from 'react';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import { LiaRupeeSignSolid } from "react-icons/lia";
import useScrollToTop from '../components/MoveToTop';
import { FiArrowUpCircle } from "react-icons/fi";

const MyProfile = () => {

  const { showButton, handleMoveToTop } = useScrollToTop();

  return (
    <>

     {showButton && (
        <span className='flex items-center gap-2 rounded-md px-3 py-2 text-white bg-red-600 hover:bg-red-700 w-36 fixed bottom-20 md:bottom-12 right-6 md:right-16 cursor-pointer overflow-auto z-50' onClick={handleMoveToTop}>
          <span><FiArrowUpCircle /></span>
          <span>Move to top</span>
        </span>
      )}


    <div className='grid justify-center py-4'>
    <span className='m-auto'><Avatar src='https://i.redd.it/ld34wnxr71fb1.jpg' sx={{width:50,height:50}} /></span>
    <span className='py-2 text-sm text-gray-500'>Itachi Uchiha</span>
    <Link to='/editprofile' className='bg-gray-200 hover:bg-gray-300 transition-all duration-500 text-sm px-2 py-1 rounded-lg'>Edit profile</Link>
    </div>

    <h1 className='text-gray-500 text-xl text-center py-4'>Order History</h1>

    <div className='w-[95%] md:w-[50%] m-auto p-2 border text-gray-500 rounded-lg my-4'>
    <Link to='/orderhistory'>
   <div className='flex items-center justify-center'>
   <div className='w-[70%] h-[100px] overflow-auto py-2 border-r border-black'>
    pasta , costa rica , noodles , desserts , soft drinks , pizza garlic mix with extra grilled sauce .
   </div>
   <div className='w-[25%] h-[100px] overflow-auto'>
    <div className='grid justify-center py-2'>
    <span className='py-1 text-red-600'>Total Price</span>
    <span className='flex items-center'>
      <span><LiaRupeeSignSolid/></span>
      <span className='text-sm'>5000 /-</span>
    </span>
    </div>
   </div>
   </div>
   <div className='flex items-center justify-center gap-2 py-2'>
    <span className='font-semibold'>Status:</span>
    <span className='bg-yellow-500 text-white p-1 rounded-lg'>Out for delivery</span>
   </div>
   <p className='text-xs text-center py-1'>2 days ago</p>
   </Link>
    </div>

    <div className='w-[95%] md:w-[50%] m-auto p-2 border text-gray-500 rounded-lg my-4'>
    <Link to='/orderhistory'>
   <div className='flex items-center justify-center'>
   <div className='w-[70%] h-[100px] overflow-auto py-2 border-r border-black'>
    pasta , costa rica , noodles , desserts , soft drinks , pizza garlic mix with extra grilled sauce .
   </div>
   <div className='w-[25%] h-[100px] overflow-auto'>
    <div className='grid justify-center py-2'>
    <span className='py-1 text-red-600'>Total Price</span>
    <span className='flex items-center'>
      <span><LiaRupeeSignSolid/></span>
      <span className='text-sm'>5000 /-</span>
    </span>
    </div>
   </div>
   </div>
   <div className='flex items-center justify-center gap-2 py-2'>
    <span className='font-semibold'>Status:</span>
    <span className='bg-green-600 text-white p-1 rounded-lg'>Delivered</span>
   </div>
   <p className='text-xs text-center py-1'>5 days ago</p>
   </Link>
    </div>

    <div className='w-[95%] md:w-[50%] m-auto p-2 border text-gray-500 rounded-lg my-4'>
    <Link to='/orderhistory'>
   <div className='flex items-center justify-center'>
   <div className='w-[70%] h-[100px] overflow-auto py-2 border-r border-black'>
    pasta , costa rica , noodles , desserts , soft drinks , pizza garlic mix with extra grilled sauce .
   </div>
   <div className='w-[25%] h-[100px] overflow-auto'>
    <div className='grid justify-center py-2'>
    <span className='py-1 text-red-600'>Total Price</span>
    <span className='flex items-center'>
      <span><LiaRupeeSignSolid/></span>
      <span className='text-sm'>5000 /-</span>
    </span>
    </div>
   </div>
   </div>
   <div className='flex items-center justify-center gap-2 py-2'>
    <span className='font-semibold'>Status:</span>
    <span className='bg-red-600 text-white p-1 rounded-lg'>Order Cancelled</span>
   </div>
   <p className='text-xs text-center py-1'>1 week ago</p>
   </Link>
    </div>

    <div className='w-[95%] md:w-[50%] m-auto p-2 border text-gray-500 rounded-lg my-4'>
    <Link to='/orderhistory'>
   <div className='flex items-center justify-center'>
   <div className='w-[70%] h-[100px] overflow-auto py-2 border-r border-black'>
    pasta , costa rica , noodles , desserts , soft drinks , pizza garlic mix with extra grilled sauce .
   </div>
   <div className='w-[25%] h-[100px] overflow-auto'>
    <div className='grid justify-center py-2'>
    <span className='py-1 text-red-600'>Total Price</span>
    <span className='flex items-center'>
      <span><LiaRupeeSignSolid/></span>
      <span className='text-sm'>5000 /-</span>
    </span>
    </div>
   </div>
   </div>
   <div className='flex items-center justify-center gap-2 py-2'>
    <span className='font-semibold'>Status:</span>
    <span className='bg-green-600 text-white p-1 rounded-lg'>Delivered</span>
   </div>
   <p className='text-xs text-center py-1'>2 weeks ago</p>
   </Link>
    </div>

    <div className='w-[95%] md:w-[50%] m-auto p-2 border text-gray-500 rounded-lg my-4'>
    <Link to='/orderhistory'>
   <div className='flex items-center justify-center'>
   <div className='w-[70%] h-[100px] overflow-auto py-2 border-r border-black'>
    pasta , costa rica , noodles , desserts , soft drinks , pizza garlic mix with extra grilled sauce .
   </div>
   <div className='w-[25%] h-[100px] overflow-auto'>
    <div className='grid justify-center py-2'>
    <span className='py-1 text-red-600'>Total Price</span>
    <span className='flex items-center'>
      <span><LiaRupeeSignSolid/></span>
      <span className='text-sm'>5000 /-</span>
    </span>
    </div>
   </div>
   </div>
   <div className='flex items-center justify-center gap-2 py-2'>
    <span className='font-semibold'>Status:</span>
    <span className='bg-red-600 text-white p-1 rounded-lg'>Order Canceled</span>
   </div>
   <p className='text-xs text-center py-1'>3 weeks ago</p>
   </Link>
    </div>

    </>
  )
}

export default MyProfile