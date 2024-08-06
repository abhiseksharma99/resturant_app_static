import React from 'react';
import Avatar from '@mui/material/Avatar';
import { BiSolidEdit } from "react-icons/bi";

const EditProfile = () => {
  return (
   <>

   <h1 className='text-red-600 text-xl font-semibold text-center py-4'>Edit Profile</h1>
   
   <div className='border rounded-xl w-[95%] md:w-[40%] m-auto grid justify-center p-4'>
   <span className='m-auto'>
   <Avatar src='https://i.redd.it/ld34wnxr71fb1.jpg' sx={{width:50,height:50}} />
   </span>
   <button className='text-xs flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all duration-500 w-28 m-auto my-1 p-1 rounded-lg'>
   <span><BiSolidEdit/></span>
   <span>Edit profile pic</span> 
    </button>
   <p className='border rounded-lg px-2 py-1 mt-3 mb-1 text-center'>example@gmail.com</p>
   <p className='border rounded-lg px-2 py-1 my-1 text-center'>Itachi Uchiha</p>
   <button className='bg-green-600 hover:bg-green-700 text-white p-1 w-28 m-auto transition-all duration-500 rounded-lg text-sm mt-3'>Update Changes</button>
   </div>

   <div className='text-center py-2'>
   <button className='border border-red-600 hover:bg-red-700 text-red-600 hover:text-white p-1 w-40 m-auto transition-all duration-500 rounded-lg text-sm mt-4'>Delete My Account</button>
   </div>
 
   <div className='py-4'>
   <p className='flex items-center justify-center gap-1 text-gray-500  p-1 text-xs'>
    <span>Account Created on:</span>
    <span>5 August,2024</span>
   </p>
   <p className='flex items-center justify-center gap-1 text-gray-500 text-xs p-1'>
    <span>Last Updated on:</span>
    <span>5 August,2024</span>
   </p>
   </div>

   </>
  )
}

export default EditProfile