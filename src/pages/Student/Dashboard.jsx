import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoNotifications } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FaRegTimesCircle } from "react-icons/fa";
import { PastExamCard, RunningExamCard } from '../../components/Student/ExamCard';
import '../../css/public.css'


const Layout = () => {
    const [started, setStarted] = useState(false)

    return (
        <div>
            {
                started ? <PreExam></PreExam> : <Dashboard setStarted={setStarted} />
            }
        </div>
    )
}


function Dashboard({ setStarted }) {
    const navigate = useNavigate()
    return (
        <div className='w-full sm:w-[90%] md:w-[90%] mx-auto  h-[99vh] overflow-y-scroll pb-24 py-6 sm:py-10 flex flex-col space-y-8'>
            <div className='flex justify-between pl-6 items-center gap-4'>

                <div className='w-fit flex flex-col'>
                    <h3 className='text-2xl sm:text-3xl font-bold'>Good Morning,</h3>
                    <p className='text-base sm:text-lg font-semibold text-secondary text-right '>John Doe</p>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='text-xl border-2 border-gray-400/50 p-2 rounded-full cursor-pointer hover:border-green-400 active:border-green-500 transition duration-500 tooltip tooltip-left tooltip-accent' data-tip='Notifications'>
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
                    <RunningExamCard setStarted={setStarted} />
                </div>
            </div>

            {/* taken exam card */}
            <div className='w-full flex flex-col justify-center items-center space-y-10'>
                <h1 className='text-2xl font-bold text-accent'>Past Exam</h1>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <PastExamCard />
                    <PastExamCard />
                    <PastExamCard />
                    <PastExamCard />
                </div>
            </div>
        </div>
    )
}

const PreExam = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-[88vh] flex flex-col justify-center items-center '>
          <div className='w-[80%] flex flex-col justify-center items-center border border-gray-400/50 rounded-lg p-4 space-y-5'>
              <div className='w-full flex flex-col justify-center items-center' >
                <div className='w-full flex flex-col justify-center items-center gap-1'>
                    <h1 className='text-xl font-bold'>Organic Chemistry 01</h1>
                    <h2 className='text-base font-semibold'>Chemistry 2nd Paper</h2>
                </div>
                <div className='w-[80%] flex items-center justify-between'>
                    <p>Marks: <span className='font-semibold'>30</span></p>
                    <p>Time: <span>30 min</span></p>
                </div>
            </div>
            <div className='w-full px-2 flex flex-col justify-center items-start space-y-1'>
                <h1 className='text-lg font-bold text-secondary'>Topics : </h1>
                <div className='w-full flex flex-col space-y-1 font-semibold'>
                    <li>Electrophilic Addition Reaction</li>
                    <li>Electrophilic Substitution Reaction</li>
                    <li>Nucleophilic Addition Reaction</li>
                    <li>Nucleophilic Substitution Reaction</li>
                </div>
            </div>
            <div>
                <button onClick={() => navigate('/student/exam')} className='btn btn-outline btn-accent text-white hover:text-black font-bold '>Start Now</button>
            </div>
          </div>

        </div>
    )
}


export default Layout