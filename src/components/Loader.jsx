import React from 'react'

function Loader() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <span className="loading loading-infinity text-primary loading-xl"></span>

        </div>
    )
}

export default Loader