import React from 'react';
import { IoIosHeart } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const FavouriteDishes = () => {
  return (
    <>
    
    <div className='flex flex-wrap justify-center py-4 md:w-[95%] m-auto'>

    <div style={{backgroundImage:'url("https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-red-600 text-2xl'><IoIosHeart/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Desserts</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>89 /-</span>
    </h2>
    </div>
    <Link to='/placeyourorder' className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</Link>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScszDY-p5eCL_qqOvVZRkBl2TwHaLP0iJIAw&s")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-red-600 text-2xl'><IoIosHeart/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Soft Drinks</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>150 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta6.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-red-600 text-2xl'><IoIosHeart/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>White Pasta</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>170 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://img-global.cpcdn.com/recipes/e3ec4c85e4587638/680x482cq70/macaroni-pasta-foto-resep-utama.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-red-600 text-2xl'><IoIosHeart/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Masala Pasta</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>170 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>
    
    </div>

    </>
  )
}

export default FavouriteDishes