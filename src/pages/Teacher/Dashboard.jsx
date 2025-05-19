import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoNotifications } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className='w-[90%] mx-auto my-10 h-full'>
      <div className='flex justify-end items-center gap-4'>
        <div onClick={() => navigate('/teacher/dashboard/notifications')} className='text-xl border-2 border-gray-400/50 p-2 rounded-full cursor-pointer hover:border-green-400 active:border-green-500 transition duration-500 tooltip tooltip-bottom tooltip-accent' data-tip='Notifications'>
          <IoNotifications />
        </div>
        <div onClick={() => navigate('/teacher/dashboard/profile')} className='text-xl border-2 border-gray-400/50 p-2 rounded-full cursor-pointer hover:border-green-400 active:border-green-500 transition duration-500 tooltip tooltip-bottom tooltip-accent' data-tip='Profile'>
          <FaUser />
        </div>
      </div>
    </div>
  )
}

export default Dashboard