import React, { useEffect } from 'react'
import Natification from '../../components/Teacher/Notification'


function Notifications() {
  const [data, setData] = React.useState([1,
    2,
    3,
    4,
    5,6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ])
  const handleDelete = (id) => {
    const filtered = data.filter((item) => item !== id)
    setData(filtered)
  }
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className='w-[100%] sm:w-[80%] mx-auto flex flex-col items-center justify-center space-y-6'>
      <h1 className='text-2xl font-bold text-gray-500'>Notifications</h1>
      <div className='w-full pl-2  grid grid-cols-1 md:grid-cols-2 gap-8'>
        {
          data.map((item, index) => (
            <Natification handleDelete={handleDelete} key={index} index={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Notifications