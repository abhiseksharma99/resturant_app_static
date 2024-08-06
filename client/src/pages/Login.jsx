import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <>
    
    <div className='py-12 flex items-center justify-center gap-4'>
     <div className='hidden md:block w-[400px] h-[400px] overflow-hidden LOGIN-IMAGE'></div>
     <div className='w-[95%] md:w-[450px] h-[450px] shadow-xl shadow-gray-600 overflow-auto'>
      <h1 className='text-center font-semibold text-xl py-6'>Login</h1>
      <div className='grid px-5 py-16'>
      <input className='px-2 py-3 my-2 rounded-lg focus:outline-none border' type='text' placeholder='username' />
      <input className='px-2 py-3  my-2 rounded-lg focus:outline-none border' type='password' placeholder='password' />
      <button className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 transition-all duration-500 rounded-full w-24 m-auto my-4'>Login</button>
      </div>
      <div className='text-center'>
        Don't have an account ? 
        <Link to='/signup' className='ml-1 underline text-red-600 cursor-pointer'>Signup</Link>
      </div>
     </div>
    </div>
    
    </>
  )
}

export default Login