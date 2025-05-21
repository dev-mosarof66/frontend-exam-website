import React from 'react'
import { IoCheckmarkDoneSharp } from "react-icons/io5";



function QuestionCard({ question, id }) {
    return (
        <div className='w-[100%]   border-2 card border-gray-400/50 space-y-3 rounded-lg p-4'>
            <h1 className='text-lg sm:text-xl font-bold space-x-1'><span className='text-green-400'>{id}.</span> <span className='font-semibold'>{question.title}</span></h1>
            <div className='grid grid-cols-1  xs:grid-cols-2 gap-2'>
                {
                    question.options.map((item, index) => (
                        <div className={`flex items-center gap-2 ${question.answer === item ? 'relative' : ''}`}>
                            <p className='text-base sm:text-base font-semibold '>{String.fromCharCode(65 + index)}.</p>
                            <p key={index} className={`text-base ${question.answer === item ? 'relative' : ''} sm:text-base font-semibold text-gray-300`}>{item}

                                <span>
                                    {
                                        question.answer === item && (
                                            <div className='absolute top-1 -right-6 text-base text-secondary'>
                                                <IoCheckmarkDoneSharp />
                                            </div>
                                        )
                                    }
                                </span>
                            </p>


                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default QuestionCard