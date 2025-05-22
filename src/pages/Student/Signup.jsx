import React, { useState } from 'react'
import SignupImage from '../../assets/background.png'
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLock, MdEmail } from "react-icons/md";
import Toggle from '../../components/Toggle';
import { useNavigate } from 'react-router';
import axiosInstance from '../../api/axios';
import toast from 'react-hot-toast';
import Logo from '../../assets/LOGO.png'

function Signup() {
  const navigate = useNavigate()
  const [togglePasswordView, setTogglePasswordView] = useState(false)
  const [toggleConfirmPasswordView, setToggleConfirmPasswordView] = useState(false)
  const [input, setInput] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    stayLoggedIn: false
  })

  const handleSignup = async (e) => {
    e.preventDefault()

    if (input.password !== input.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await axiosInstance.post('/teacher/signup', input);
      console.log(res);
      toast.success("Account created successfully!");
      navigate('/teacher/dashboard')
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Signup failed");
    }
  }

  return (
    <div className='w-full md:h-screen bg-[#160430] md:grid md:grid-cols-2 gap-5 flex flex-col items-center justify-center'>
      <div className='w-full h-full relative'>
        <img className='w-full h-screen object-cover' src={SignupImage} alt="Background" />
        <div className='absolute top-6 left-10 flex items-center gap-2'>
          <img onClick={() => navigate('/')} src={Logo} alt="logo" className='w-8 h-8 hover:scale-105 cursor-pointer transition duration-300 delay-75' />
          <h1 className='font-bold text-xl w-full text-center text-green-700'>Bee Master</h1>
        </div>
        <div className='absolute left-10 bottom-16 flex-col items-center justify-end hidden md:flex w-[300px]'>
          <h1 className='font-bold text-4xl md:text-3xl w-full text-center text-green-700'>REGISTER FOR THE <span className='text-white'>ADVENTURE</span></h1>
        </div>
      </div>

      <div className='w-full xs:w-[500px] md:w-full h-full flex flex-col items-center justify-center absolute md:relative space-y-5'>
        <h1 className='font-bold text-3xl w-full text-center text-green-700'>REGISTER FOR THE <span className='text-white'>ADVENTURE</span></h1>
        <div className='w-[90%] bg-[#160430] flex items-center justify-center animate-fade-right animate-delay-300 space-y-6'>
          <div className='w-full relative z-10 p-4 px-4 xs:px-10'>
            <form className='mt-4 w-full space-y-3 md:space-y-5' onSubmit={handleSignup}>
              {/* Full Name */}
              <div className='flex items-center space-x-2 border border-gray-500 rounded-lg py-2 px-2'>
                <FaUser className='text-gray-500' />
                <input value={input.fullname} onChange={(e) => setInput({ ...input, fullname: e.target.value })} className='outline-none border-none w-full' type="text" placeholder='Full Name' spellCheck={false} />
              </div>

              {/* Username */}
              <div className='flex items-center space-x-2 border border-gray-500 rounded-lg py-2 px-2'>
                <FaUser className='text-gray-500' />
                <input value={input.username} onChange={(e) => setInput({ ...input, username: e.target.value })} className='outline-none border-none w-full' type="text" placeholder='Username' spellCheck={false} />
              </div>

              {/* Email */}
              <div className='flex items-center space-x-2 border border-gray-500 rounded-lg py-2 px-2'>
                <MdEmail className='text-gray-500' />
                <input value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} className='outline-none border-none w-full' type="email" placeholder='Email' spellCheck={false} />
              </div>

              {/* Password */}
              <div className='flex items-center space-x-1 border border-gray-500 rounded-lg py-2 px-2'>
                <MdLock className='text-gray-500 text-lg' />
                <input
                  value={input.password}
                  onChange={(e) => setInput({ ...input, password: e.target.value })}
                  className='outline-none border-none w-full'
                  type={togglePasswordView ? "text" : "password"}
                  placeholder='Password'
                  spellCheck={false}
                />
                <div className='px-2 text-lg cursor-pointer' onClick={() => setTogglePasswordView(!togglePasswordView)}>
                  {!togglePasswordView ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>

              {/* Confirm Password */}
              {/* <div className='flex items-center space-x-1 border border-gray-500 rounded-lg py-2 px-2'>
                <MdLock className='text-gray-500 text-lg' />
                <input
                  value={input.confirmPassword}
                  onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                  className='outline-none border-none w-full'
                  type={toggleConfirmPasswordView ? "text" : "password"}
                  placeholder='Confirm Password'
                  spellCheck={false}
                />
                <div className='px-2 text-lg cursor-pointer' onClick={() => setToggleConfirmPasswordView(!toggleConfirmPasswordView)}>
                  {!toggleConfirmPasswordView ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div> */}


              <div className='w-full'>
                <button type="submit" className='w-full btn btn-accent'>Sign Up</button>
              </div>
            </form>
            <h2 className='text-sm my-2 text-gray-400'>
              Already have an account?
              <span onClick={() => navigate('/student/login')} className='text-secondary font-bold hover:text-secondary/70 active:text-black/70 cursor-pointer transition-all duration-300 delay-75 mx-2'>
                Sign In
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
