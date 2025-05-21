import React from 'react'
import notFound from '../../assets/not-found.gif'
import { Link, useNavigate } from 'react-router'

function NotFound() {

    const navigate = useNavigate()

    return (
        <div className='w-full h-screen bg-white text-black flex flex-col items-center justify-center'>
            <div className='sm:max-w-sm'>
                <img src={notFound} />
            </div>
            <p className='text-lg font-bold text-secondary animate-fade-up animate-delay-200'>OOPS! <span className='text-black'>Page not found</span></p>
            <button onClick={() => navigate(-1)} to={'/'} className='btn my-4 animate-fade-up animate-delay-300'>Return</button>
        </div>
    )
}

export default NotFound
