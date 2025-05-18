import React from 'react'
import Icon from '../assets/Icon01.png'

function Hero() {
    return (
        <div className='w-full  flex flex-col justify-center items-center gap-4'>
            <div className='border-2 border-gray-400/50 p-2 px-4 flex items-center gap-2 rounded-4xl w-fit'>
                <img src={Icon} alt="icon" />
                <p className='font-semibold text-xs sm:text-base md:text-xl'>Boost Your Team's Performance</p>
            </div>
            <div className='text-center space-y-5'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl  lg:text-6xl px-5  font-bold'>Elevate Your Workflow: One Step to Productivity</h1>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl lg:w-[70%] mx-auto px-4'>Boost your team's productivity with our intuitive and easy-to-use platform. Streamline tasks, collaborate effectively, and unlock the potential of your team's performance.</p>
            </div>
            <div className='flex items-center gap-4'>
                <button className='btn btn-accent text-black font-bold'>Request a Demo</button>
                <button className='btn btn-outline btn-accent text-white hover:text-black font-bold transition duration-300 delay-75'>Pricing</button>
            </div>
        </div>
    )
}

export default Hero