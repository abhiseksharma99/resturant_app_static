import React from 'react';
import '../App.css';
import pizzaImage from '../Images/pizza.jpg';
import feature1 from '../Images/feature-1.jpg';
import featureResturant from '../Images/feature-resturant.jpg';
import burger from '../Images/burger.jpg';
import noodles from '../Images/noodles.jpg';
import sushi from '../Images/sushi.jpg';
import dosa from '../Images/dosa.jpg';
import nonveg from '../Images/non-veg.jpg';
import drinks from '../Images/drinks.jpg';
import desserts from '../Images/desserts.png';
import pasta from '../Images/pasta.jfif';
import { FaFacebook,FaInstagram,FaSnapchatGhost } from "react-icons/fa";
import Copyright from '../components/Copyright';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
     
    <div className='BG-IMAGE h-[350px]'>
    <div className='h-[350px] relative' style={{backgroundColor:'rgb(16,16,13,0.7)'}}>
    <div className='absolute bottom-8 left-5 text-white md:w-[50%]'>
    <h1 className='text-3xl'>Welocome to</h1>
    <h1 className='text-3xl py-2'>Zombato🧟</h1>
    <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur nam amet. Vel, quaerat sequi! Minus quos ullam reprehenderit voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur nam amet. Vel, quaerat sequi! Minus quos ullam reprehenderit voluptatum.</p>
    <Link to='/resturants' className='bg-white text-black hover:bg-gray-300 transition-all duration-500 px-2 py-1 my-4 rounded-full text-sm'>View More</Link>
    </div>
    </div>
    </div>


   <h1 className='text-center text-3xl font-bold py-6'>
    Categories
   </h1>

   <div className='w-full md:w-[90%] h-[120px] m-auto flex items-center justify-around overflow-auto gap-8 HIDDEN-SCROLLBAR px-2'>
  <span className='flex-shrink-0 grid justify-center text-center m-auto cursor-pointer hover:transform hover:scale-110 duration-500'>
  <img src={pizzaImage} className='w-[80px] h-[80px] rounded-full m-auto' />
  <span className=' font-bold text-xl'>Pizza</span>
  </span>
  <span className='flex-shrink-0 grid justify-center text-center m-auto cursor-pointer hover:transform hover:scale-110 duration-500'>
  <img src={burger} className='w-[80px] h-[80px] rounded-full m-auto' />
  <span className=' font-bold text-xl'>Burger</span>
  </span>
  <span className='flex-shrink-0 grid justify-center text-center m-auto cursor-pointer hover:transform hover:scale-110 duration-500'>
  <img src={noodles} className='w-[80px] h-[80px] rounded-full m-auto' />
  <span className=' font-bold text-xl'>Noodles</span>
  </span>
  <span className='flex-shrink-0 grid justify-center text-center m-auto cursor-pointer hover:transform hover:scale-110 duration-500'>
  <img src={pasta} className='w-[80px] h-[80px] rounded-full m-auto' />
  <span className=' font-bold text-xl'>Pasta</span>
  </span>
  <span className='flex-shrink-0 grid justify-center text-center m-auto cursor-pointer hover:transform hover:scale-110 duration-500'>
  <img src={sushi} className='w-[80px] h-[80px] rounded-full m-auto' />
  <span className=' font-bold text-xl'>Sushi</span>
  </span>
  <span className='flex-shrink-0 grid justify-center text-center m-auto cursor-pointer hover:transform hover:scale-110 duration-500'>
  <img src={dosa} className='w-[80px] h-[80px] rounded-full m-auto' />
  <span className=' font-bold text-xl'>South Indian</span>
  </span>
  <span className='flex-shrink-0 grid justify-center text-center m-auto cursor-pointer hover:transform hover:scale-110 duration-500'>
  <img src={nonveg} className='w-[80px] h-[80px] rounded-full m-auto' />
  <span className=' font-bold text-xl'>Non-Veg</span>
  </span>
  <span className='flex-shrink-0 grid justify-center text-center m-auto cursor-pointer hover:transform hover:scale-110 duration-500'>
  <img src={desserts} className='w-[80px] h-[80px] rounded-full m-auto' />
  <span className=' font-bold text-xl'>Desserts</span>
  </span>
  <span className='flex-shrink-0 grid justify-center text-center m-auto cursor-pointer hover:transform hover:scale-110 duration-500'>
  <img src={drinks} className='w-[80px] h-[80px] rounded-full m-auto' />
  <span className=' font-bold text-xl'>Drinks</span>
  </span>
   </div>


   <div className='py-6 flex flex-wrap-reverse items-center justify-around gap-2'>
    <div>
      <img className='w-[400px] h-[400px] rounded-full' src={feature1} />
    </div>
    <div className='w-[500px] h-[300px] overflow-hidden'>
      <h1 className='text-red-600 text-3xl font-bold p-3'>Special Offers !</h1>
      <h2 className='text-red-600 text-3xl font-semibold p-3'>Trending Items</h2>
      <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam impedit corporis ut hic at, officia vel eos iste cumque, ipsa nostrum provident quaerat accusantium pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dolor harum error exercitationem ut impedit suscipit adipisci cupiditate maiores. Blanditiis sunt corporis dolor vero dicta.</p>
    </div>
   </div>


   <div className='py-8 flex flex-wrap items-center justify-around gap-2'>
    <div className='w-[500px] h-[300px] overflow-hidden'>
      <h1 className='text-red-600 text-3xl font-bold p-3'>Verified Resturants</h1>
      <h2 className='text-red-600 text-3xl font-semibold p-3'>Trusted Staff</h2>
      <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam impedit corporis ut hic at, officia vel eos iste cumque, ipsa nostrum provident quaerat accusantium pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dolor harum error exercitationem ut impedit suscipit adipisci cupiditate maiores. Blanditiis sunt corporis dolor vero dicta.</p>
    </div>
    <div>
      <img className='w-[400px] h-[400px] rounded-full' src={featureResturant} />
    </div>
   </div>

   <div className='flex'>
   <Link to='/resturants' className='bg-red-600 hover:bg-red-700 transition-all duration-500 text-white px-4 py-2 rounded-full my-10 m-auto'>
    Start Ordering
   </Link>
   </div>

   <div className='bg-red-600 text-white h-[280px] flex items-center justify-around'>
    <div className='w-[250px] h-[260px] p-1 grid justify-center'>
      <h1 className='text-xl font-semibold'>Popular Locations</h1>
      <div className='py-5'>
        <ul className='cursor-pointer'>
          <li className='hover:underline'>Bangalore</li>
          <li className='hover:underline'>Kochi</li>
          <li className='hover:underline'>Thiruvantpuram</li>
          <li className='hover:underline'>kolkata</li>
          <li className='hover:underline'>kalapkaam</li>
          <li className='hover:underline'>Hyderabad</li>
          <li className='hover:underline'>Rameshwaram</li>
        </ul>
      </div>
    </div>
    <div className='w-[250px] h-[260px] p-1 grid justify-center'>
    <h1 className='text-xl font-semibold'>Trending Locations</h1>
      <div className='py-5'>
        <ul className='cursor-pointer'>
          <li className='hover:underline'>Delhi</li>
          <li className='hover:underline'>Pune</li>
          <li className='hover:underline'>Raipur</li>
          <li className='hover:underline'>Ahemdabad</li>
          <li className='hover:underline'>Surat</li>
          <li className='hover:underline'>Indore</li>
          <li className='hover:underline'>Sikkim</li>
        </ul>
      </div>
    </div>
    <div className='w-[250px] h-[260px] py-12'>
    <h1 className='text-xl font-semibold text-center'>Follow us on</h1>
     <span className='flex items-center justify-center gap-5 py-5 text-3xl cursor-pointer'>
      <a href='https://www.facebook.com' target='_blank' className='duration-500 hover:transform hover:scale-110'><FaFacebook/></a>
      <a href='https://www.instagram.com' target='_blank' className='duration-500 hover:transform hover:scale-110'><FaInstagram/></a>
      <a href='https://www.snapchat.com' target='_blank' className='duration-500 hover:transform hover:scale-110'><FaSnapchatGhost/></a>
     </span>
    </div>
   </div>

   <Copyright/>
       
    </>
  )
}

export default Home