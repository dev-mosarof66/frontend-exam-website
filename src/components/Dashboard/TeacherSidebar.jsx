import React,{ useState} from 'react'
import { FaUser, FaPenFancy } from 'react-icons/fa'
import { MdSpaceDashboard, MdHistory, MdOutlineLogout, MdLogout } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { FaGear } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';


const data = [
    {
        id: 1,
        name: 'Dashboard',
        icon: <MdSpaceDashboard color='white' />,
        path: '/teacher/dashboard'
    },

    {
        id: 3,
        name: 'Create Exam',
        icon: <FaPenFancy color='white' />,
        path: '/teacher/dashboard/create-test'
    },
    {
        id: 4,
        name: 'Publish',
        icon: <IoBookmarks color='white' />,
        path: '/teacher/dashboard/publish'
    },

    {
        id: 5,
        name: 'Report',
        icon: <GiProgression color='white' />,
        path: '/teacher/dashboard/report'
    },
    {
        id: 6,
        name: 'Settings',
        icon: <FaGear color='white' />,
        path: '/teacher/dashboard/settings'
    },

]


const Data = [
    {
        id: 1,
        name: 'Dashboard',
        icon: <MdSpaceDashboard color='white' />,
        path: '/teacher/dashboard'
    },
    {
        id: 2,
        name: 'Profile',
        icon: <FaUser color='white' />,
        path: '/teacher/dashboard/profile'
    },

    {
        id: 3,
        name: 'Create Exam',
        icon: <FaPenFancy color='white' />,
        path: '/teacher/dashboard/create-test'
    },
    {
        id: 4,
        name: 'Publish',
        icon: <IoBookmarks color='white' />,
        path: '/teacher/dashboard/publish'
    },

    {
        id: 5,
        name: 'Report',
        icon: <GiProgression color='white' />,
        path: '/teacher/dashboard/report'
    },
    {
        id: 6,
        name: 'Settings',
        icon: <FaGear color='white' />,
        path: '/teacher/dashboard/settings'
    },
    {
        id: 7,
        name: 'History',
        icon: <MdHistory color='white' />,
        path: '/teacher/dashboard/history'
    }
]





export const MiniTeacherSidebar = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(1);
    return (
        <div className='flex sm:hidden w-full list-none items-center justify-between px-6 my-3'>
            {
                data.map((item, index) => (
                    <li onClick={() => {
                        setSelected(item.id)
                        navigate(item.path)
                    }}
                        className={`flex items-center gap-2  cursor-pointer duration-300 delay-75 p-2  ${selected === item.id ? 'bg-primary' : 'active:bg-gray-500/50 hover:bg-gray-500/50'} transition tooltip tooltip-top tooltip-accent`} key={index} data-tip={item.name} >
                        <div className='text-2xl'>
                            {item.icon}
                        </div>
                        <span className='hidden lg:block'>{item.name}</span>
                    </li>
                ))
            }
        </div>
    )
}
export const LargeTeacherSidebar = ({ userData = {} }) => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(1);
    return (
        <div>
            <div className='hidden sm:flex flex-col w-fit lg:w-60 h-[100vh] list-none items-start justify-between p-2 py-6 bg-blue-950'>
                <div className='flex flex-col w-full h-full  gap-4 sm:py-10'>
                    {
                        Data.map((item, index) => (
                            <li onClick={() => {
                                setSelected(item.id)
                                navigate(item.path)
                            }} className={`flex items-center gap-2  cursor-pointer duration-300 delay-75 p-2  transition tooltip tooltip-right tooltip-accent ${selected === item.id ? 'bg-primary' : 'hover:bg-gray-500/50 active:bg-gray-500/10'}`} key={index} data-tip={item.name} >
                                <div className='text-2xl'>
                                    {item.icon}
                                </div>
                                <span className='hidden lg:block '>{item.name}</span>
                            </li>
                        ))
                    }
                </div>
                <div className='w-full flex items-center gap-2 hover:bg-gray-500/50 cursor-pointer duration-300 delay-75 p-2 active:bg-gray-500/10 transition tooltip tooltip-right tooltip-accent' data-tip='Logout' >
                    <MdLogout size={25} />
                    <span className='hidden lg:block'>Logout</span>
                </div>
            </div>
        </div>
    )
}
