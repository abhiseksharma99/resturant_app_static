import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { RiEqualizerLine } from "react-icons/ri";
import { PiHeartStraight } from "react-icons/pi";
import {Link} from 'react-router-dom';

const AllResturants = () => {

   const [filter,setFilter] = useState(false);

   const handleFilter = () => {
    setFilter(!filter);
   }

  return (
    <>
    
    <div className='flex items-center justify-around gap-1 py-4 border-b w-[90%] m-auto'>
        <div className='text-center'>
          <input className='p-2 rounded-lg focus:outline-none border' type='text' placeholder='search places ... ' />
        </div>
        <div className='text-2xl relative cursor-pointer'>
         <span onClick={()=>{handleFilter()}}><RiEqualizerLine/></span>
         {
          filter &&
          (
            <span className='absolute bg-gray-50 w-40 text-sm z-20 rounded-lg text-center right-0 transition-all duration-700'>
            <ul className='p-3 cursor-pointer'>
              <li className='hover:bg-gray-200 transition-all duration-500 rounded-lg p-2'>Veg & Non-Veg</li>
              <li className='hover:bg-gray-200 transition-all duration-500 rounded-lg p-2'>Veg Only</li>
              <li className='hover:bg-gray-200 transition-all duration-500 rounded-lg p-2'>Non-Veg Only</li>
            </ul>
            </span>
          )
         }
        </div>
    </div>

      <div className='flex flex-wrap justify-center py-4 md:w-[95%] m-auto'>

      <div style={{backgroundImage:'url("https://assets.architecturaldigest.in/photos/64f84cc61d4896b633fba77a/master/w_1600%2Cc_limit/The%2520art%2520deco%2520inspired%2520de%25CC%2581cor%2520of%2520CIRQA%25201960%2520.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Afghani chawni restro</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Non-Veg
    </h2>
    </div>
    <Link to='/alldishes' className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</Link>
    </div>
      </div>

      <div style={{backgroundImage:'url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=600&h=-1&s=1")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Red Candles Cafe</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Veg & Non-Veg
    </h2>
    </div>
    <Link to='/alldishes' className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</Link>
    </div>
      </div>

      <div style={{backgroundImage:'url("https://6amcity.brightspotcdn.com/dims4/default/26f5f53/2147483647/strip/true/crop/1332x750+0+69/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk1-prod-sixam-city.s3.us-east-2.amazonaws.com%2Fbrightspot%2F0d%2F84%2F7c175b5e443092d969b6c19af3f5%2F393170483-18307701454185066-3288527068679201488-n.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>St Christ kitchen</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Veg & Non-Veg
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</button>
    </div>
      </div>

      <div style={{backgroundImage:'url("https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/16:9/w_2560%2Cc_limit/Ditas%2520Interior%2520Image%2520-%25201%2520(8).png")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Targeryeans Kingdom Restro</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Veg & Non-Veg
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</button>
    </div>
      </div>

      <div style={{backgroundImage:'url("https://media.cntraveler.com/photos/654bd5e13892537a8ded0947/16:9/w_2560%2Cc_limit/phy2023.din.oss.restaurant-lr.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
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
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
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
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Kitchen at Valhalla</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Veg & Non-Veg
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</button>
    </div>
      </div>

      <div style={{backgroundImage:'url("https://ucarecdn.com/537c4014-ab43-4416-8869-91a3dea069ef/-/scale_crop/870x500/")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Royal paradayse Restro</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Veg & Non-Veg
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</button>
    </div>
      </div>

      <div style={{backgroundImage:'url("https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F4081%2Ftrend20230830053911.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Fairytale cafe & Restro</h1>
    <h2 className='m-auto font-bold text-white px-4 py-1 rounded-xl'>
    Veg only
    </h2>
    </div>
    <button className='bg-red-600 hover:bg-red-700 text-white transition-all duration-500 px-4 py-1 rounded-full bottom-2 left-6 absolute'>Select Place</button>
    </div>
      </div>

      <div style={{backgroundImage:'url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/29/f5/58/interior.jpg?w=600&h=-1&s=1")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className='w-[170px] h-[170px] m-1 overflow-hidden rounded-lg group'>
    <div style={{backgroundColor:'rgba(16,16,13,0.6)'}} className='w-full h-full relative opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700 ease-in-out'>
    <span className='absolute top-1 right-1 text-white text-2xl'><PiHeartStraight/></span>
    <div className='text-center absolute top-7 w-full'>
    <h1 className='py-2 text-xl font-semibold text-white'>Indian Italian Cafe</h1>
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

export default AllResturants