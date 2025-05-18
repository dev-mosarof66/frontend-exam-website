import React from 'react'
import { FaUser, FaPenFancy } from 'react-icons/fa'

function Dashboard() {
  return (
    <div className='w-full'>
      <div className='text-xl border-2 border-gray-400/50 p-2 flex items-center gap-2 rounded-full jestify-end absolute top-4 right-4 cursor-pointer hover:border-green-400 transition duration-500'>
        <FaUser />
      </div>
    </div>
  )
}

export default Dashboard