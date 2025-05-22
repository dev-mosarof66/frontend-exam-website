import React from 'react'
import { MiniTeacherSidebar, LargeTeacherSidebar } from '../../components/Dashboard/TeacherSidebar'
import { Outlet } from 'react-router-dom'
import '../../css/public.css'
function TeacherDashboard() {
    return (
        <div className='w-full h-full  bg-[#0B081C]'>
            <div>
                <div className='w-full  flex items-start'>
                    <div >
                        <LargeTeacherSidebar />
                    </div>
                    <div className='w-full h-screen  overflow-y-scroll no-scroll'>
                        <Outlet />
                    </div>

                </div>
                <div>
                    <div className='fixed bottom-0 w-full bg-base-300 rounded-t-2xl ring-1 ring-green-400/50'>
                        <MiniTeacherSidebar />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default TeacherDashboard