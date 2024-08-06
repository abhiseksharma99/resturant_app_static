import React, { useState } from 'react';
import AutoScrollToTop from '../components/AutoScrollToTop';
import FavouriteDishes from '../components/FavouriteDishes';
import FavouritePlaces from '../components/FavouritePlaces';

const Myfavourites = () => {

   const [sort,setSort] = useState('dishes');

   const handleSort = (value) => {
    setSort(value);
   }

  return (
   <>
   
    <AutoScrollToTop />

    <h1 className='text-center text-2xl text-red-600 font-bold py-4'>My Favourites</h1>

    <div className='flex items-center justify-center text-xl py-4 cursor-pointer'>
      <span onClick={()=>handleSort('dishes')} className={sort === 'dishes' ? 'px-10 border-r-2 border-gray-500 text-black underline' : 'px-10 border-r-2 border-gray-500 text-gray-500'}>Dishes</span>
      <span onClick={()=>handleSort('places')} className={sort === 'places' ? 'px-10 text-black underline' : 'px-10 text-gray-500'}>Places</span>
    </div>

    {
      sort === 'dishes' ? 
      <FavouriteDishes/>
        :
      <FavouritePlaces/>
    }
    

   </>
  )
}

export default Myfavourites