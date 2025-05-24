import React from 'react'
import { useNavigate } from 'react-router-dom'

function Popup() {
    const navigate = useNavigate()
    return (
        <div className='w-full h-full flex flex-col items-center justify-center space-y-3 absolute bg-base-100'>
            <div>
                <h1 className='text-2xl text-gray-400'>Select Your Role</h1>
                <div className='w-full flex flex-col gap-1 list-none'>
                    <li onClick={() => navigate('/teacher/login')} className='w-full items-center flex justify-center hover:bg-gray-500/10 cursor-pointer duration-300 delay-75 py-1 active:bg-gray-500/10 hover:text-red-600 active:text-red-600'>Teacher</li>
                    <li onClick={() => navigate('/student/dashboard')} className='w-full items-center flex justify-center hover:bg-gray-500/10 cursor-pointer duration-300 delay-75 py-1 active:bg-gray-500/10 hover:text-red-600 active:text-red-600'>Student</li>
                </div>
            </div>
        </div>
    )
}

export default Popup