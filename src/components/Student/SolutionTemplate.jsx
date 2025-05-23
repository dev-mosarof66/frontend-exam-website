import React, { useEffect, useState } from 'react'
import { IoCheckmarkDone } from "react-icons/io5";


function SolutionTemplate({ id, title, options, selectedAnswer, setSelectedAnswer, answer }) {
    const [selectedOptions, setSelectedOptions] = useState(selectedAnswer);
    const [option, setOption] = useState(null)
    useEffect(() => {
        if (option !== null) {
            setSelectedAnswer({ ...selectedAnswer, [id]: option });
            setSelectedOptions({ ...selectedOptions, [id]: option });
        }
        setOption(null);

    }, [option, id, selectedAnswer, setSelectedAnswer, selectedOptions, setSelectedOptions]);

    useEffect(() => {

        const storedAnswers = localStorage.getItem('selectedAnswers');
        if (storedAnswers) {
            setSelectedAnswer(JSON.parse(storedAnswers));
            setSelectedOptions(JSON.parse(storedAnswers));
        }
    }, [setSelectedAnswer, setSelectedOptions]);



    return (
        <div key={id} className='flex flex-col gap-2 w-[100%] mx-auto border-2 border-gray-400/50 rounded-lg p-4'>
            <div className='flex gap-2'>
                <p className='font-bold'>{id}.</p>
                <p className='font-semibold'>{title}</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {
                    options.map((item, index) => (
                        <>
                            <div onClick={() => setOption(item)} key={index} className={`flex gap-2  p-1 cursor-pointer  transition duration-300 delay-75`}>
                                <p>{String.fromCharCode(65 + index)}.</p>
                                <p>{item}</p>
                                {selectedOptions[id] === item && answer === item ? <span className='text-green-500'>
                                    <IoCheckmarkDone size={20} />
                                </span> : null}
                                {selectedOptions[id] === item && answer !== item ? <span className='text-red-500 text-sm'>❌</span> : null}
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}





export default SolutionTemplate