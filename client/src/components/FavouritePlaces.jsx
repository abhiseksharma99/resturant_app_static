import React from 'react';
import { IoIosHeart } from "react-icons/io";
import {Link} from 'react-router-dom';

const FavouritePlaces = () => {
  return (
   <>
   
   <div className='flex flex-wrap justify-center py-4 md:w-[95%] m-auto'>

   <div style={{backgroundImage:'url("https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/16:9/w_2560%2Cc_limit/Ditas%2520Interior%2520Image%2520-%25201%2520(8).png")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-red-600 text-2xl'><IoIosHeart/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Targeryeans Kingdom Restro</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Veg & Non-Veg
    </h2>
    </div>
    <Link to='/alldishes' className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</Link>
    </div>
      </div>

      <div style={{backgroundImage:'url("https://media.cntraveler.com/photos/654bd5e13892537a8ded0947/16:9/w_2560%2Cc_limit/phy2023.din.oss.restaurant-lr.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-red-600 text-2xl'><IoIosHeart/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>UnderWate marine Cafe</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Veg only
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</button>
    </div>
      </div>

      <div style={{backgroundImage:'url("https://media.timeout.com/images/106043389/750/562/image.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-red-600 text-2xl'><IoIosHeart/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>El Popino Cafe</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Veg & Non-Veg
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</button>
    </div>
      </div>

      <div style={{backgroundImage:'url("https://b.zmtcdn.com/data/collections/4aa12fd9916f4fd05ee54ff45c2742f1_1696417885.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-red-600 text-2xl'><IoIosHeart/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Kitchen at Valhalla</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Veg & Non-Veg
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</button>
    </div>
      </div>

   </div>

   </>
  )
}

export default FavouritePlaces