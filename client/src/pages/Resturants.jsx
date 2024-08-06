import React from 'react';
import AutoScrollToTop from '../components/AutoScrollToTop';
import { FiArrowUpCircle } from "react-icons/fi";
import useScrollToTop from '../components/MoveToTop';
import AllResturants from '../components/AllResturants';

const Resturants = () => {
  const { showButton, handleMoveToTop } = useScrollToTop();

  return (
    <>
      <AutoScrollToTop />

      {showButton && (
        <span className='flex items-center gap-2 rounded-md px-3 py-2 text-white bg-red-600 hover:bg-red-700 w-36 fixed bottom-20 md:bottom-12 right-6 md:right-16 cursor-pointer overflow-auto z-50' onClick={handleMoveToTop}>
          <span><FiArrowUpCircle /></span>
          <span>Move to top</span>
        </span>
      )}

      <h1 className='text-center text-xl text-red-600 font-bold py-4'>Start Ordering from your favourite place</h1>

      <AllResturants/>

    </>
  );
};

export default Resturants;
