import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Notification({ handleDelete, index }) {
    return (
        <div className='w-[100%]  h-20 flex items-center justify-between gap-4 px-4 bg-blue-950 rounded-lg shadow shadow-secondary hover:scale-105 transition duration-300 delay-75 cursor-pointer'>
            <div className='flex items-center gap-4'>
                <div className='size-12 bg-amber-200 rounded-full'></div>
                <div className='flex flex-col'>
                    <h1 className='text-base sm:text-lg font-semibold'>Notification</h1>
                    <p className='text-xs sm:text-sm'>You have a new notification</p>
                    <p className='text-[10px] w-fit text-info sm:hidden'>{index} min ago</p>
                </div>
                <p className='text-xs w-fit text-info hidden sm:block'>{index} min ago</p>
            </div>
            <div onClick={() => handleDelete(index)} className='text-xl cursor-pointer hover:text-red-500 active:text-red-500 transition duration-300 delay-75'>
                <FaTimes />
            </div>
        </div>
    )
}

export default Notification