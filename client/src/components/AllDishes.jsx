import React from 'react';
import { PiHeartStraight } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { RiEqualizerLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const AllDishes = () => {
  return (
    <>

    <div className='bg-red-400 md:w-[50%] m-auto overflow-hidden'>
      <img src='https://assets.architecturaldigest.in/photos/64f84cc61d4896b633fba77a/master/w_1600%2Cc_limit/The%2520art%2520deco%2520inspired%2520de%25CC%2581cor%2520of%2520CIRQA%25201960%2520.jpg' />
    </div>

    <div className='text-center py-2 md:w-[50%] m-auto'>
     <h1 className='text-red-600 text-xl font-semibold py-2'> Welcome to Afghani Chawni Restro</h1>
     <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam illo, quos eos hic excepturi magni facilis similique distinctio aperiam odio eaque deserunt, itaque ex aspernatur dolorum sunt mollitia quasi consequatur dolor voluptates, corrupti voluptatibus consequuntur. Reprehenderit tempore dolorem obcaecati.</p>
    </div>

    <h1 className='text-red-600 text-xl text-center py-4 font-semibold'>Select Dishes</h1>

   <div className='flex items-center justify-around gap-1 border-b w-[90%] m-auto py-4'>
        <div className='text-center'>
          <input className='p-2 rounded-lg focus:outline-none border' type='text' placeholder='search items ... ' />
        </div>
        <div className='text-2xl'>
          <RiEqualizerLine/>
        </div>
      </div>

      <div className='flex flex-wrap justify-center py-4 md:w-[95%] m-auto'>
    
    <div style={{backgroundImage:'url("https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Pizza margerita</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>200 /-</span>
    </h2>
    </div>
    <Link to='/placeyourorder' className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</Link>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Burger</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>150 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://lindseyeatsla.com/wp-content/uploads/2021/11/LindseyEats_Spicy_Garlic_Noodles-3.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>चौमीन</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>180 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://www.sharmispassions.com/wp-content/uploads/2013/02/EggMasala4.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Egg Curry</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>280 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://i.ytimg.com/vi/G_B1Py4dNR8/maxresdefault.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Mutton Curry</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>490 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani-600x600.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Hyderabadi Chicken biryani</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>399 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://www.licious.in/blog/wp-content/uploads/2016/07/Hot-Dogs.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Hotdog</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>199 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://www.indianhealthyrecipes.com/wp-content/uploads/2023/06/cutlet-recipe-veg-cutlet.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Cutlet</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>249 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Desserts</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>89 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScszDY-p5eCL_qqOvVZRkBl2TwHaLP0iJIAw&s")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
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
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
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
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
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

    <div style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hmYmzczs981DPmtSYqGGdHPznI2SCkiHDw&s")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Sushi</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>799 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcW5yYoX19aijhclmJWolNkbaOkBInxfplnw&s")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Chinese Soup</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>289 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfNvtj_Zz_dL1O_6q8MVDKw8UqXsTJsA4lw&s")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>French Fries</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>150 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://5.imimg.com/data5/SELLER/Default/2023/6/317303848/CV/SX/OQ/159610309/paneer-momos.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Veg & Non-veg Momo</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>300 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://myfoodstory.com/wp-content/uploads/2022/04/Shahi-Paneer-1-500x500.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Saahi Paneer</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>490 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Indian Thali</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>600 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAqpzRbw2i0kQEOuDBMndu5wYO5QRwUey0PA1ui9D2C9MTsqjVnc3wvkddN8sGGyUoXg&usqp=CAU")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Salads</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>180 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    <div style={{backgroundImage:'url("https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/veg-manchurian.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <span className='absolute top-9 right-1 text-white text-2xl'><MdOutlineShoppingCart/></span>
    <div className='text-center absolute top-14 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Manchurian</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl flex items-center justify-center'>
    <span className='text-xl'><LiaRupeeSignSolid/></span>    
    <span>300 /-</span>
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Order Now</button>
    </div>
    </div>

    </div>

    </>
  )
}

export default AllDishes