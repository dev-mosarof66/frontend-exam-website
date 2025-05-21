import React, { useState } from 'react'
import '../../css/public.css'
import Navbar, { MiniNavbar, Drawer } from '../../components/nav'
import Hero from '../../components/Hero';
import Popup from '../../components/Popup';

function Home() {
    const [open, setOpen] = useState(false);
    const [getStarted, setGetStarted] = useState(false);
    return (
        <div className='w-full h-screen bg'>
            {
                getStarted ? <Popup /> :
                    <>
                        <div className='w-full sm:w-[90%] md:w-[80%] mx-auto h-full'>
                            {/* mobile nav  */}
                            <div>
                                <div className='sm:hidden'>
                                    <MiniNavbar setOpen={setOpen} open={open} setGetStarted={setGetStarted} />
                                </div>
                                <div className='hidden sm:block'>
                                    <Navbar setGetStarted={setGetStarted} />
                                </div>
                            </div>
                            <div className='w-full h-[90%] sm:h-[80%] flex justify-center items-center'>
                                <Hero  />
                            </div>
                        </div></>
            }
        </div>
    )
}

export default Home