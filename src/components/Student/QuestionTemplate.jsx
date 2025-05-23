import React, { useEffect, useState } from 'react'

function QuestionTemplate({ id, title, options, selectedAnswer, setSelectedAnswer }) {
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
                        <div onClick={() => setOption(item)} key={index} className={`flex gap-2 ${selectedOptions[id] === item ? 'bg-accent text-black font-bold' : 'hover:bg-white/10 hover:text-white font-semibold'} p-1 cursor-pointer  transition duration-300 delay-75`}>
                            <p>{String.fromCharCode(65 + index)}.</p>
                            <p>{item}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}





export default QuestionTemplate