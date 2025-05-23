import React, { useState } from 'react'
import LoginImage from '../../assets/background.png'
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import Toggle from '../../components/Toggle';
import { useNavigate } from 'react-router';
import axiosInstance from '../../api/axios';
import toast from 'react-hot-toast';
import Logo from '../../assets/LOGO.png'




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
    <div className='w-full md:h-screen bg-[#160430] md:grid md:grid-cols-2 gap-5 flex flex-col items-center justify-center'>
      <div className='w-full h-full relative'>
        <img className='w-full h-screen object-cover bg-red-300' src={LoginImage} />
        <div className='absolute top-6 left-10 flex items-center gap-2'>
          <img onClick={() => navigate('/')} src={Logo} alt="logo" className='w-8 h-8 hover:scale-105 cursor-pointer transition duration-300 delay-75' />
          <h1 className='font-bold text-xl  w-full text-center text-green-700'>Bee Master</h1>
        </div>
        <div className='absolute left-10 bottom-16  flex-col items-center justify-end hidden md:flex w-[300px]'>
          <h1 className='font-bold text-4xl md:text-3xl w-full text-center text-green-700'>SIGN IN TO YOUR <span className='text-white'>ADVENTURE</span> </h1>
        </div>

      </div>
      <div className='w-full   h-full flex flex-col items-center justify-center absolute md:relative space-y-5'>
          <h1 className='font-bold text-3xl w-full text-center text-green-700'>SIGN IN TO YOUR <span className='text-white'>ADVENTURE</span> </h1>
        <div className='w-[90%] bg-[#160430] flex items-center justify-center  animate-fade-right animate-delay-300 space-y-6'>
          <div className='w-full relative z-10 p-4 px-4 xs:px-10'>
            <form action="login" className='mt-4 w-full space-y-3 md:space-y-7'>
              {/* username  */}
              <div className='flex items-center space-x-2 border border-gray-500 rounded-lg py-2 sm:py-2 px-2'>
                <FaUser className='text-gray-500' />
                <input value={input.username} onChange={(e) => setInput({ ...input, username: e.target.value })} className='outline-none border-none w-full' type="text" placeholder='Username' spellCheck={false} />
              </div>
              {/* password */}
              <div className='flex items-center space-x-1 border border-gray-500 rounded-lg py-2 sm:py-2 px-2'>
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

                <p className='text-gray-400'>
                  Remember me
                </p>
              </div>
              <div className='w-full'>
                <button onClick={(e) => handleLogin(e)} className='w-full btn btn-accent'>Sign In</button>
              </div>
            </form>
            <h2 className='text-sm my-2 text-gray-400'>Don't have account? <span onClick={() => navigate('/student/signup')} className='text-secondary font-bold hover:text-secondary/70 active:text-black/70 cursor-pointer transition-all duration-300 delay-75 mx-2'>Sign Up</span></h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
