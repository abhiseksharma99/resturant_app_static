import React from 'react';
import { LiaRupeeSignSolid } from "react-icons/lia";
import {Link} from 'react-router-dom';

const Myorders = () => {
  return (
   <>
   
   <h1 className='text-center text-xl font-semibold text-red-600 py-3'>My Orders</h1>

   <div className='w-[95%] md:w-[50%] m-auto p-2 border text-gray-500 rounded-lg my-4'>
    <Link to='/currentorder'>
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
    <span className='bg-red-600 text-white p-1 rounded-lg'>out for delivery</span>
   </div>
   </Link>
   </div>

   </>
  )
}

export default Myorders