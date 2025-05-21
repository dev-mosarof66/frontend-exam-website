import React, { useContext, useState } from 'react'
import LoginImage from '../../assets/register-teacher.jpg'
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import Toggle from '../../components/Toggle';
import { useNavigate } from 'react-router';
import axiosInstance from '../../api/axios';
import toast from 'react-hot-toast';




function Login() {
    console.log('login');
    
    const navigate = useNavigate()
    const [togglePasswordView, setTogglePasswordView] = useState(false)
    const [input, setInput] = useState({
        username: '',
        password: '',
        stayLoggedIn: false
    })

    //handle login

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(input);

        await axiosInstance.post('/teacher/login', input).then((res) => {
            console.log(res);
            navigate('/teacher/dashboard')
        }).catch((err) => {
            console.error(err);
            toast.error(`${err.response.data.message}`)
            
        })

    }


    return (
        <div className='w-full h-screen bg-white text-black md:grid md:grid-cols-2 xl:px-10 flex flex-col items-center justify-center'>
            <div className='sm:w-full flex items-center justify-center text-center  animate-fade-right animate-delay-200'>
                <img className='w-96 h-[370px] md:w-[400px] bg-red-300' src={LoginImage} />
            </div>

            <div className='w-full flex items-center justify-center  animate-fade-right animate-delay-300'>
                <div className='w-full sm:w-[70%] relative z-10 p-4 px-10 sm:px-0'>
                    <h1 className='font-bold text-2xl md:text-3xl '>Login</h1>
                    <p className='font-semibold text-[15px]'>Please login to continue.</p>
                    <form action="login" className='mt-4 w-full space-y-3'>
                        {/* username  */}
                        <div className='flex items-center space-x-2 border border-gray-500 rounded-lg py-1 sm:py-2 px-2'>
                            <FaUser className='text-gray-500' />
                            <input value={input.username} onChange={(e) => setInput({ ...input, username: e.target.value })} className='outline-none border-none w-full' type="text" placeholder='Username' spellCheck={false} />
                        </div>
                        {/* password */}
                        <div className='flex items-center space-x-1 border border-gray-500 rounded-lg py-1 sm:py-2 px-2'>
                            <MdLock className='text-gray-500 text-lg' />
                            <input value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} className='outline-none border-none w-full' type={togglePasswordView ? "text" : "password"} placeholder='Password' spellCheck={false} />

                            {/* visibility checker  */}
                            <div className='px-2 text-lg cursor-pointer' onClick={() => setTogglePasswordView(!togglePasswordView)}>
                                {
                                    !togglePasswordView ? <FaEye /> : <FaEyeSlash />
                                }
                            </div>
                        </div>
                        <div className="fieldset flex items-center w-full justify-between px-2">

                            <Toggle value={input.stayLoggedIn} onChange={(e) => setInput({ ...input, stayLoggedIn: e.target.checked })} />

                            <p className='text-gray-500'>
                                Remember me
                            </p>
                        </div>
                        <div className='w-full'>
                            <button onClick={(e) => handleLogin(e)} className='w-full btn'>Sign In</button>
                        </div>
                    </form>
                    <h2 className='text-sm my-2 text-gray-500'>Don't have account? <span onClick={() => navigate('/teacher/signup')} className='text-black font-bold hover:text-black/70 active:text-black/70 cursor-pointer transition-all duration-300 delay-75 mx-2'>Sign Up</span></h2>
                </div>
            </div>

        </div>
    )
}

export default Login
