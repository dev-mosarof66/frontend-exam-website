import React from 'react'
import { MiniTeacherSidebar, LargeTeacherSidebar } from '../../components/Dashboard/TeacherSidebar'
import { Outlet } from 'react-router-dom'

function TeacherDashboard() {
    return (
        <div className='w-full h-screen bg-[#0B081C]'>
            <div className='w-full  mx-auto h-full flex flex-col justify-between'>
                <div className='flex'>
                    <div>
                        <LargeTeacherSidebar />
                    </div>
                    <div className='flex-1 p-4'>
                        <Outlet />
                    </div>

                </div>
                <div>
                    <MiniTeacherSidebar />
                </div>


            </div>

        </div>
    )
}

export default TeacherDashboard