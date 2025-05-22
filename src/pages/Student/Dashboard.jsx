import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoNotifications } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FaRegTimesCircle } from "react-icons/fa";
import { PastExamCard, RunningExamCard } from '../../components/Student/ExamCard';
import '../../css/public.css'


function Dashboard() {
    const navigate = useNavigate()
    return (
        <div className='w-full sm:w-[90%] md:w-[90%]  h-[99vh] overflow-y-scroll pb-20 mx-auto py-6 sm:py-10 flex flex-col space-y-8'>
            <div className='flex justify-between px-4 items-center gap-4'>

                <div className='w-fit flex flex-col'>
                    <h3 className='text-xl sm:text-2xl font-bold'>Good Morning,</h3>
                    <p className='text-base sm:text-lg font-semibold text-secondary text-right '>John Doe</p>
                </div>

                <div className='flex items-center gap-4'>
                    <div onClick={() => navigate('/teacher/dashboard/notifications')} className='text-xl border-2 border-gray-400/50 p-2 rounded-full cursor-pointer hover:border-green-400 active:border-green-500 transition duration-500 tooltip tooltip-left tooltip-accent' data-tip='Notifications'>
                        <IoNotifications />
                    </div>
                    <div onClick={() => navigate('/teacher/dashboard/profile')} className='hidden sm:block text-xl border-2 border-gray-400/50 p-2 rounded-full cursor-pointer hover:border-green-400 active:border-green-500 transition duration-500 tooltip tooltip-bottom tooltip-accent' data-tip='Profile'>
                        <FaUser />
                    </div>
                </div>
            </div>
            {/* running exam card  */}
            <div className='w-full md:w-[60%] mx-auto flex flex-col justify-center items-center space-y-10'>
                <h1 className='text-2xl font-bold text-accent'>Running Exam</h1>
                <div className='w-full flex flex-col justify-center items-center'>
                    <RunningExamCard />
                </div>
            </div>

            {/* taken exam card */}
            <div className='w-full flex flex-col justify-center items-center space-y-10'>
                <h1 className='text-2xl font-bold text-accent'>Past Exam</h1>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <PastExamCard />
                    <PastExamCard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard