import React from 'react'
import Logo from '../assets/LOGO.png'
import { MdMenu } from "react-icons/md";


function Navbar() {
    return (
        <header>
            <nav className="flex justify-between items-center p-4">
                <ul className='flex items-center gap-3'>
                    <li className='flex items-center gap-1 cursor-pointer hover:scale-110 transition duration-300 delay-75'>
                        <img src={Logo} alt="logo" />
                        {/* <h1 className='text-lg font-bold'>Master</h1> */}
                    </li>
                    <li className='font-bold hover:text-red-600 active:text-red-600 transition duration-300 delay-75 cursor-pointer'>Home</li>
                    <li className='font-bold hover:text-red-600 active:text-red-600 transition duration-300 delay-75 cursor-pointer'>About</li>
                    <li className='font-bold hover:text-red-600 active:text-red-600 transition duration-300 delay-75 cursor-pointer'>Services</li>
                    <li className='font-bold hover:text-red-600 active:text-red-600 transition duration-300 delay-75 cursor-pointer'>Pricing</li>
                    <li className='font-bold hover:text-red-600 active:text-red-600 transition duration-300 delay-75 cursor-pointer'>Blog</li>
                </ul>
                <ul>
                    <button className='btn btn-secondary text-black font-bold'>Get Started</button>
                </ul>
            </nav>
        </header>
    )
}

export const MiniNavbar = ({ setOpen, open }) => {
    return (
        <header>
            <nav className="flex justify-between items-center  px-4 pt-2 fixed top-0 left-0 right-0 z-30">
                <ul onClick={() => setOpen(!open)} className='flex items-center group p-2  cursor-pointer transition duration-300 delay-75'>
                    <MdMenu className='group-hover:text-red-400 group-active:text-red-400 transition duration-300 delay-75' size={30} />
                </ul>
                <ul className='flex items-center gap-3'>
                    <li className='flex items-center gap-1 cursor-pointer hover:scale-110 transition duration-300 delay-75'>
                        <img src={Logo} alt="logo" />
                    </li>
                </ul>
                <ul>
                    <button className='btn btn-secondary btn-sm text-black font-bold'>Get Started</button>
                </ul>
            </nav>
            <div className='fixed top-14 left-0 right-0 z-20 transition-transform duration-300 delay-75 ease-in-out'>
                {
                    open ? <Drawer /> : null
                }
            </div>
        </header>
    )
}

export const Drawer = () => {
    return (
        <nav className="flex flex-col items-center py-4 px-1 w-full bg-[#1F234F] list-none space-y-2">

            <li className='w-full items-center flex justify-center hover:bg-gray-500/10 cursor-pointer duration-300 delay-75 py-1 active:bg-gray-500/10 hover:text-red-600 active:text-red-600'>
                Home
            </li>
            <li className='w-full items-center flex justify-center hover:bg-gray-500/10 cursor-pointer duration-300 delay-75 py-1 active:bg-gray-500/10 hover:text-red-600 active:text-red-600'>About</li>
            <li className='w-full items-center flex justify-center hover:bg-gray-500/10 cursor-pointer duration-300 delay-75 py-1 active:bg-gray-500/10 hover:text-red-600 active:text-red-600'>Services</li>
            <li className='w-full items-center flex justify-center hover:bg-gray-500/10 cursor-pointer duration-300 delay-75 py-1 active:bg-gray-500/10 hover:text-red-600 active:text-red-600'>Pricing</li>
            <li className='w-full items-center flex justify-center hover:bg-gray-500/10 cursor-pointer duration-300 delay-75 py-1 active:bg-gray-500/10 hover:text-red-600 active:text-red-600'>Blog</li>

        </nav>
    )
}


export default Navbar