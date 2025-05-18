import React, { useState } from 'react'
import '../css/Home.css'
import Navbar, { MiniNavbar, Drawer } from '../components/nav'
import Hero from '../components/Hero';

function Home() {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full h-screen bg'>
            <div className='w-full sm:w-[90%] md:w-[80%] mx-auto h-full'>
                {/* mobile nav  */}
                <div>
                    <div className='sm:hidden'>
                        <MiniNavbar setOpen={setOpen} open={open} />
                    </div>
                    <div className='hidden sm:block'>
                        <Navbar />
                    </div>
                </div>
                <div className='w-full h-[90%] sm:h-[80%] flex justify-center items-center'>
                    <Hero/>
                </div>
            </div>
        </div>
    )
}

export default Home