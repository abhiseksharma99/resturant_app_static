import React from 'react';
import {Link} from 'react-router-dom';

const Address = () => {
  return (
    <>
    
    <h1 className=' text-red-600 py-4 text-lg text-center font-semibold'>Almost Done ! Please Enter Address details for delivery ...</h1>

    <div className='border rounded-xl  px-4 pb-4 w-[98%] md:w-[50%] m-auto grid my-6 overflow-auto'>
     <h1 className='text-gray-500 text-center font-semibold py-5'>Address Details</h1>
     <div className='flex flex-wrap items-center justify-between'>
     <input className='border p-2 rounded-lg my-2 w-44 md:w-auto focus:outline-none' type='text' placeholder='username' />
     <input className='border p-2 rounded-lg my-2 w-44 md:w-auto focus:outline-none' type='email' placeholder='email' />
     </div>
     <input className='border p-2 rounded-lg my-2 focus:outline-none' type='text' placeholder='address lane 1' />
     <input className='border p-2 rounded-lg my-2 focus:outline-none' type='text' placeholder='address lane 2' />
     <input className='border p-2 rounded-lg my-2 focus:outline-none' type='text' placeholder='landmark' />
     <div className='flex flex-wrap items-center justify-between'>
     <input className='border p-2 rounded-lg my-2 w-44 md:w-auto focus:outline-none' type='text' placeholder='State' />
     <input className='border p-2 rounded-lg my-2 w-44 md:w-auto focus:outline-none' type='text' placeholder='City' />
     </div>
     <Link to='/myorders' className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-all duration-500 text-white w-24 mt-5 m-auto text-center'>Order</Link>
    </div>

    
    
    </>
  )
}

export default Address