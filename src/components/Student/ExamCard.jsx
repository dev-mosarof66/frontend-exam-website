import { useState } from "react"
import { FaRegTimesCircle } from "react-icons/fa"
import { IoCheckmarkDoneOutline } from "react-icons/io5"

export const PastExamCard = () => {
    return (
        <div className='w-[80%] mx-auto  p-4 rounded-lg bg-purple-500 flex flex-col space-y-6 cursor-pointer hover:scale-105 transition duration-500 shadow-lg shadow-secondary/40'>
            <div className='w-full flex flex-col justify-center items-center'>
                <p className='text-lg font-bold'>Organic Chemistry 01</p>
                <p className='text-sm font-semibold'>Chemistry 2nd Paper</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col space-y-2'>
                    <p>Total Questions: <span className='font-black'>20</span></p>
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center gap-2 tooltip tooltip-bottom tooltip-accent' data-tip='Correct Answers'>
                            <div>
                                <IoCheckmarkDoneOutline className='text-yellow-700 text-xl font-black' />
                            </div>
                            <div className='font-bold text-black'>15</div></div>
                        <div className='flex items-center gap-2 tooltip tooltip-bottom tooltip-accent' data-tip='Wrong Answers'>
                            <div>
                                <FaRegTimesCircle className='text-red-700 text-lg' />
                            </div>
                            <span className='font-bold text-black'>5</span></div>
                    </div>
                </div>
                <div>
                    <button className='btn btn-sm '>Report</button>
                </div>
            </div>
        </div>
    )
}

export const RunningExamCard = () => {
    return (
        <div className='w-[80%] mx-auto  p-4 rounded-lg bg-primary flex flex-col space-y-6 cursor-pointer hover:scale-105 transition duration-500 shadow-lg shadow-secondary/40'>
            <div className='w-full flex flex-col justify-center items-center'>
                <p className='text-lg font-bold'>Organic Chemistry</p>
                <p className='text-sm font-semibold'>Chemistry 2nd Paper</p>
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <p>Total Questions: <span className='font-semibold'>20</span></p>
                    <p>Time: <span>30 min</span></p>
                </div>
                <div>
                    <button className='btn btn-sm btn-outline '>Start</button>
                </div>
            </div>
        </div>
    )
}



const options = ["A", "B", "C", "D"];



export const QuestionTemplate = ({ demo }) => {
    let char = "A"
    const [selectedAnswer, setSelectedAnswer] = useState([{
        id: null,
        answer: null
    }])

    const handleMultipleSelection = () => {

    }

    const handleOptionSelection = (index, option) => {
    

    }
    return (
        <div className="w-full flex flex-col space-y-4 ">
            {
                demo.map((item, index) => (
                    <div className="border border-gray-400/50 p-4 space-y-3">
                        <div className="w-full flex justify-between  gap-2">
                            <div className="w-full flex gap-2">
                                <p className="text-lg font-bold text-secondary">{index + 1}.</p>
                                <h2 className="font-semibold">{item.question}</h2>
                            </div>
                            <div className="text-sm font-bold tooltip tooltip-bottom" data-tip="points">
                                <p>{1}</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {item.options.map((option, index) => (
                                    <div onClick={() => handleOptionSelection(index, option)} className={`border border-gray-500/20 w-full hover:bg-gray-700/30 cursor-pointer transition duration-300 delay-75 p-1 ${selectedAnswer[index] && selectedAnswer[index].answer === option ? "bg-green-700" : ""}`}>
                                        <p>{char + index} : <span>{option}</span> </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}