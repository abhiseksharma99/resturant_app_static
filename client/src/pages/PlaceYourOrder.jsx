import React from 'react';
import AutoScrollToTop from '../components/AutoScrollToTop';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const PlaceYourOrder = () => {
  return (
    <>
    
    <AutoScrollToTop/>

    <h1 className='text-xl text-center text-red-600 py-4 font-semibold'>Place Your Order</h1>

    <div className='flex flex-wrap justify-center'>

    <div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
      <div className='flex items-center justify-center gap-5'>
      <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
        <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg' />
      </div>
      <div className='w-[170px] h-[170px] overflow-hidden py-5'>
        <h1 className='text-center py-2'>Quantity</h1>
        <span className='flex items-center justify-center gap-1 cursor-pointer'>
         <span className='px-3 py-1 border rounded-lg'>-</span>
         <span className='px-5 py-3 border rounded-lg'>2</span>
         <span className='px-3 py-1 border rounded-lg'>+</span>
        </span>
        <div className='flex items-center justify-center py-2'>
        <span className='text-red-600 font-semibold'>Total :</span>
        <span className='ml-1'><LiaRupeeSignSolid/></span>
        <span className='text-sm'>300 /-</span>
        </div>
      </div>
      </div>
      <div className='flex items-center justify-between py-1'>
       <span className='text-sm text-gray-500'>Pizza margerita extra grilled</span>
       <button className='bg-red-600 text-white hover:bg-red-700 rounded-lg  px-4 py-1 transition-all duration-500'>Remove Item</button>
      </div>
    </div>

    <div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
      <div className='flex items-center justify-center gap-5'>
      <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
        <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfNvtj_Zz_dL1O_6q8MVDKw8UqXsTJsA4lw&s' />
      </div>
      <div className='w-[170px] h-[170px] overflow-hidden py-5'>
        <h1 className='text-center py-2'>Quantity</h1>
        <span className='flex items-center justify-center gap-1 cursor-pointer'>
         <span className='px-3 py-1 border rounded-lg'>-</span>
         <span className='px-5 py-3 border rounded-lg'>3</span>
         <span className='px-3 py-1 border rounded-lg'>+</span>
        </span>
        <div className='flex items-center justify-center py-2'>
        <span className='text-red-600 font-semibold'>Total :</span>
        <span className='ml-1'><LiaRupeeSignSolid/></span>
        <span className='text-sm'>400 /-</span>
        </div>
      </div>
      </div>
      <div className='flex items-center justify-between py-1'>
       <span className='text-sm text-gray-500'>French Fries</span>
       <button className='bg-red-600 text-white hover:bg-red-700 rounded-lg  px-4 py-1 transition-all duration-500'>Remove Item</button>
      </div>
    </div>

    <div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
      <div className='flex items-center justify-center gap-5'>
      <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
        <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpg' />
      </div>
      <div className='w-[170px] h-[170px] overflow-hidden py-5'>
        <h1 className='text-center py-2'>Quantity</h1>
        <span className='flex items-center justify-center gap-1 cursor-pointer'>
         <span className='px-3 py-1 border rounded-lg'>-</span>
         <span className='px-5 py-3 border rounded-lg'>1</span>
         <span className='px-3 py-1 border rounded-lg'>+</span>
        </span>
        <div className='flex items-center justify-center py-2'>
        <span className='text-red-600 font-semibold'>Total :</span>
        <span className='ml-1'><LiaRupeeSignSolid/></span>
        <span className='text-sm'>80 /-</span>
        </div>
      </div>
      </div>
      <div className='flex items-center justify-between py-1'>
       <span className='text-sm text-gray-500'>Darkforest flavour Desserts</span>
       <button className='bg-red-600 text-white hover:bg-red-700 rounded-lg  px-4 py-1 transition-all duration-500'>Remove Item</button>
      </div>
    </div>

    <div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
      <div className='flex items-center justify-center gap-5'>
      <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
        <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://img-global.cpcdn.com/recipes/e3ec4c85e4587638/680x482cq70/macaroni-pasta-foto-resep-utama.jpg' />
      </div>
      <div className='w-[170px] h-[170px] overflow-hidden py-5'>
        <h1 className='text-center py-2'>Quantity</h1>
        <span className='flex items-center justify-center gap-1 cursor-pointer'>
         <span className='px-3 py-1 border rounded-lg'>-</span>
         <span className='px-5 py-3 border rounded-lg'>1</span>
         <span className='px-3 py-1 border rounded-lg'>+</span>
        </span>
        <div className='flex items-center justify-center py-2'>
        <span className='text-red-600 font-semibold'>Total :</span>
        <span className='ml-1'><LiaRupeeSignSolid/></span>
        <span className='text-sm'>190 /-</span>
        </div>
      </div>
      </div>
      <div className='flex items-center justify-between py-1'>
       <span className='text-sm text-gray-500'>pasta</span>
       <button className='bg-red-600 text-white hover:bg-red-700 rounded-lg  px-4 py-1 transition-all duration-500'>Remove Item</button>
      </div>
    </div>

    <div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
      <div className='flex items-center justify-center gap-5'>
      <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
        <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcW5yYoX19aijhclmJWolNkbaOkBInxfplnw&s' />
      </div>
      <div className='w-[170px] h-[170px] overflow-hidden py-5'>
        <h1 className='text-center py-2'>Quantity</h1>
        <span className='flex items-center justify-center gap-1 cursor-pointer'>
         <span className='px-3 py-1 border rounded-lg'>-</span>
         <span className='px-5 py-3 border rounded-lg'>4</span>
         <span className='px-3 py-1 border rounded-lg'>+</span>
        </span>
        <div className='flex items-center justify-center py-2'>
        <span className='text-red-600 font-semibold'>Total :</span>
        <span className='ml-1'><LiaRupeeSignSolid/></span>
        <span className='text-sm'>300 /-</span>
        </div>
      </div>
      </div>
      <div className='flex items-center justify-between py-1'>
       <span className='text-sm text-gray-500'>Chinese Soup</span>
       <button className='bg-red-600 text-white hover:bg-red-700 rounded-lg  px-4 py-1 transition-all duration-500'>Remove Item</button>
      </div>
    </div>

    <div className='border w-[90%] md:w-[30%] m-auto p-2 rounded-lg my-3'>
      <div className='flex items-center justify-center gap-5'>
      <div className='w-[170px] h-[170px] overflow-hidden rounded-lg'>
        <img style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} src='https://5.imimg.com/data5/SELLER/Default/2023/6/317303848/CV/SX/OQ/159610309/paneer-momos.jpg' />
      </div>
      <div className='w-[170px] h-[170px] overflow-hidden py-5'>
        <h1 className='text-center py-2'>Quantity</h1>
        <span className='flex items-center justify-center gap-1 cursor-pointer'>
         <span className='px-3 py-1 border rounded-lg'>-</span>
         <span className='px-5 py-3 border rounded-lg'>2</span>
         <span className='px-3 py-1 border rounded-lg'>+</span>
        </span>
        <div className='flex items-center justify-center py-2'>
        <span className='text-red-600 font-semibold'>Total :</span>
        <span className='ml-1'><LiaRupeeSignSolid/></span>
        <span className='text-sm'>500 /-</span>
        </div>
      </div>
      </div>
      <div className='flex items-center justify-between py-1'>
       <span className='text-sm text-gray-500'>Chicken Momo</span>
       <button className='bg-red-600 text-white hover:bg-red-700 rounded-lg  px-4 py-1 transition-all duration-500'>Remove Item</button>
      </div>
    </div>

    </div>

    <div className='shadow-xl shadow-gray-500 rounded-lg w-[90%] md:w-[40%] m-auto p-4 my-8 grid justify-center text-center text-gray-500 '>
    <div className='flex items-center justify-center gap-5 py-1'>
    <span>Total price inc. all items & Quantity</span>
    <span className='flex flex-wrap items-center'>
    <span><LiaRupeeSignSolid/></span>  
    <span className='text-sm'>4500 /-</span>  
    </span> 
    </div> 
    <div className='flex items-center justify-center gap-5 py-1'>
    <span>Gst & Other taxes</span>
    <span className='flex flex-wrap items-center'>
    <span><LiaRupeeSignSolid/></span>  
    <span className='text-sm'>500 /-</span>  
    </span> 
    </div> 
    <div className='flex items-center justify-center gap-5 py-1'>
    <span>Total payable Amount</span>
    <span className='flex flex-wrap items-center'>
    <span><LiaRupeeSignSolid/></span>  
    <span className='text-sm'>5000 /-</span>  
    </span> 
    </div> 
    <Link to='/address' className='bg-red-600 hover:bg-red-700 px-4 py-1 text-white rounded-lg transition-all duration-500 mt-5 w-32 m-auto'>Place Order</Link>
    </div>

    </>
  )
}

export default PlaceYourOrder