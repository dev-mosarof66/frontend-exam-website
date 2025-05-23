import React from 'react'
import { BottomNavbar, Sidebar } from '../../components/Student/nav'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <div className='w-full h-full  bg-[#0B081C]'>
      <div>
        <div className='w-full  flex items-start'>
          <div >
            <Sidebar />
          </div>
          <div className='w-full h-screen py-6 sm:py-10  overflow-y-scroll no-scroll'>
            <Outlet />
          </div>

        </div>
        <div>
          <div className='fixed bottom-0 w-full bg-base-300 rounded-t-2xl ring-1 ring-green-400/50'>
            <BottomNavbar />
          </div>
        </div>


      </div>

    </div>
  )
}

export default Home