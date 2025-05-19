import React from 'react'
import '../../css/Profile.css'
import profile from '../../assets/baby.jpg'
import { FaEdit } from "react-icons/fa";
import { MdLogout } from "react-icons/md";



function Profile() {
  return (
    <div className='w-[100%] mx-auto flex flex-col justify-center items-center no-scroll'>
      <div className='absolute top-4 right-4 text-2xl cursor-pointer hover:text-red-500 active:text-red-500 transition duration-300 delay-75 tooltip tooltip-left tooltip-accent' data-tip='Logout'>
        <MdLogout />
      </div>
      <div className='bg flex flex-col justify-end items-start px-6'>

        <div className='flex items-center gap-4 justify-between w-full lg:w-[80%] mx-auto'>
          <img src={profile} alt="profile" className='w-16 h-16 sm:size-20 rounded-full' />
          <div className='flex items-center gap-2 hover:text-red-500 active:text-red-500 tooltip tooltip-bottom tooltip-accent cursor-pointer sm:tooltip-bottom transition duration-300 delay-75' data-tip='Edit Profile'>
            <FaEdit size={20} />
            <span className='text-sm hidden sm:block'>Edit Profile</span>
          </div>
        </div>
      </div>
      <div className='mt-4 w-full h-64 bg-amber-300 flex flex-col justify-center items-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>John Doe</h1>
        <p className='text-sm sm:text-base md:text-lg'>Teacher</p>
      </div>
      <div className='mt-4 w-full h-64 bg-amber-300 flex flex-col justify-center items-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>John Doe</h1>
        <p className='text-sm sm:text-base md:text-lg'>Teacher</p>
      </div>

    </div>
  )
}

export default Profile