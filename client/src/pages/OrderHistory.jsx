import React from 'react';
import { LiaRupeeSignSolid } from "react-icons/lia";
import AutoScrollToTop from '../components/AutoScrollToTop';

const OrderHistory = () => {
  return (
    
  <>
  
  <AutoScrollToTop/>

  <h1 className='text-xl text-center text-gray-500 py-4 font-semibold'>Order Details History</h1>

  <div className='flex flex-wrap justify-center'>

<div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
  <div className='flex items-center justify-center gap-5'>
  <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
    <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg' />
  </div>
  <div className='w-[170px] h-[170px] overflow-hidden py-5'>
    <div className='text-center py-2 flex items-center justify-center gap-2'>
     <span>Quantity:</span>
     <span>2</span>
    </div>
    <div className='flex items-center justify-center py-2'>
    <span className='text-red-600 font-semibold'>Total :</span>
    <span className='ml-1'><LiaRupeeSignSolid/></span>
    <span className='text-sm'>300 /-</span>
    </div>
  </div>
  </div>
  <div className='flex items-center justify-between py-1'>
   <p className='text-sm text-gray-500'>Pizza margerita extra grilled</p>
  </div>
</div>

<div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
  <div className='flex items-center justify-center gap-5'>
  <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
    <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://lindseyeatsla.com/wp-content/uploads/2021/11/LindseyEats_Spicy_Garlic_Noodles-3.jpg' />
  </div>
  <div className='w-[170px] h-[170px] overflow-hidden py-5'>
    <div className='text-center py-2 flex items-center justify-center gap-2'>
     <span>Quantity:</span>
     <span>1</span>
    </div>
    <div className='flex items-center justify-center py-2'>
    <span className='text-red-600 font-semibold'>Total :</span>
    <span className='ml-1'><LiaRupeeSignSolid/></span>
    <span className='text-sm'>400 /-</span>
    </div>
  </div>
  </div>
  <div className='flex items-center justify-between py-1'>
   <p className='text-sm text-gray-500'>Noodles</p>
  </div>
</div>

<div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
  <div className='flex items-center justify-center gap-5'>
  <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
    <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani-600x600.jpg' />
  </div>
  <div className='w-[170px] h-[170px] overflow-hidden py-5'>
    <div className='text-center py-2 flex items-center justify-center gap-2'>
     <span>Quantity:</span>
     <span>3</span>
    </div>
    <div className='flex items-center justify-center py-2'>
    <span className='text-red-600 font-semibold'>Total :</span>
    <span className='ml-1'><LiaRupeeSignSolid/></span>
    <span className='text-sm'>400 /-</span>
    </div>
  </div>
  </div>
  <div className='flex items-center justify-between py-1'>
   <p className='text-sm text-gray-500'>Hyderabadi Chicken Biryani</p>
  </div>
</div>

<div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
  <div className='flex items-center justify-center gap-5'>
  <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
    <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta6.jpg' />
  </div>
  <div className='w-[170px] h-[170px] overflow-hidden py-5'>
    <div className='text-center py-2 flex items-center justify-center gap-2'>
     <span>Quantity:</span>
     <span>1</span>
    </div>
    <div className='flex items-center justify-center py-2'>
    <span className='text-red-600 font-semibold'>Total :</span>
    <span className='ml-1'><LiaRupeeSignSolid/></span>
    <span className='text-sm'>150 /-</span>
    </div>
  </div>
  </div>
  <div className='flex items-center justify-between py-1'>
   <p className='text-sm text-gray-500'>White sauce pasta</p>
  </div>
</div>

<div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
  <div className='flex items-center justify-center gap-5'>
  <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
    <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://5.imimg.com/data5/SELLER/Default/2023/6/317303848/CV/SX/OQ/159610309/paneer-momos.jpg' />
  </div>
  <div className='w-[170px] h-[170px] overflow-hidden py-5'>
    <div className='text-center py-2 flex items-center justify-center gap-2'>
     <span>Quantity:</span>
     <span>4</span>
    </div>
    <div className='flex items-center justify-center py-2'>
    <span className='text-red-600 font-semibold'>Total :</span>
    <span className='ml-1'><LiaRupeeSignSolid/></span>
    <span className='text-sm'>500 /-</span>
    </div>
  </div>
  </div>
  <div className='flex items-center justify-between py-1'>
   <p className='text-sm text-gray-500'>Chicken momo</p>
  </div>
</div>

    </div>
  
  </>

  )
}

export default OrderHistory