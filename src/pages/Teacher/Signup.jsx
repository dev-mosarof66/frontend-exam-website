import React, { useState } from 'react'
import RegisterImage from '../../assets/register-teacher.jpg'
import { FaUser, FaYelp } from "react-icons/fa";
import { MdLock, MdMail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import axiosInstance from '../../api/axios';





function Register() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    })

    //handle register

    const handleRegister = async (e) => {
        e.preventDefault()
        console.log(input);

        await axiosInstance.post('/teacher/register', input).then((res) => {
            console.log(res);
            toast.success(`${res.data.message}. Redirecting to Login...`)
            navigate('/teacher/login')
        }).catch((err) => {
            console.error(err);
            toast.error(`${err.response.data.message}`)

        })
    }

    const [togglePasswordView, setTogglePasswordView] = useState(false)
    return (
        <div className='w-full h-screen bg-white text-black md:grid md:grid-cols-2 xl:px-10 flex flex-col items-center justify-center py-3'>
            <div className='sm:w-full flex items-center justify-center text-center animate-fade-right animate-delay-200'>
                <img className='w-[400px] h-[350px]  bg-red-300' src={RegisterImage} />
            </div>

            <div className='w-full flex items-center justify-center  animate-fade-right animate-delay-300'>
                <div className='w-full sm:w-[70%] relative z-10 p-4 px-10 sm:px-0'>
                    <h1 className='font-bold text-2xl md:text-3xl '>Register</h1>
                    <p className='font-semibold text-[15px]'>Please register to continue.</p>
                    <form action="login" className='mt-4 w-full space-y-3'>
                        {/* username  */}
                        <div className='flex items-center space-x-2 border border-gray-500 rounded-lg py-1 sm:py-2 px-2'>
                            <FaUser className='text-gray-500' />
                            <input onChange={(e) => setInput({ ...input, username: e.target.value })} value={input.username} className='outline-none border-none w-full' type="text" placeholder='Username' spellCheck={false} />
                        </div>
                        {/* email  */}
                        <div className='flex items-center space-x-2 border border-gray-500 rounded-lg py-1 sm:py-2 px-2'>
                            <MdMail className='text-gray-500 text-lg' />
                            <input onChange={(e) => setInput({ ...input, email: e.target.value })} value={input.email} className='outline-none border-none w-full' type="text" placeholder='Email' spellCheck={false} />
                        </div>
                        {/* password */}
                        <div className='flex items-center space-x-1 border border-gray-500 rounded-lg py-1 sm:py-2 px-2'>
                            <MdLock className='text-gray-500 text-lg' />
                            <input onChange={(e) => setInput({ ...input, password: e.target.value })} value={input.password} className='outline-none border-none w-full' type={togglePasswordView ? "text" : "password"} placeholder='Password' spellCheck={false} />

                            {/* visibility checker  */}
                            <div className='px-2 text-lg cursor-pointer' onClick={() => setTogglePasswordView(!togglePasswordView)}>
                                {
                                    !togglePasswordView ? <FaEye /> : <FaEyeSlash />
                                }
                            </div>
                        </div>
                        <div className='w-full my-2'>
                            <button onClick={(e) => handleRegister(e)} className='w-full btn'>Sign Up</button>
                        </div>
                    </form>
                    <h2 className='text-sm my-2 text-gray-500'>Already have an account? <span onClick={() => navigate("/teacher/login")} className='text-black font-bold hover:text-black/70 active:text-black/70 cursor-pointer transition-all duration-300 delay-75 mx-1'>Sign In</span></h2>
                </div>
            </div>

        </div>
    )
}

export default Register
