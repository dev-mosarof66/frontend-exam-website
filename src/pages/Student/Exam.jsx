import React, { useEffect, useState } from 'react'
import QuestionTemplate from '../../components/Student/QuestionTemplate'
import { dummyQuestions } from '../../api/dummyQ'
import { useNavigate } from 'react-router-dom';



function Exam() {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    console.log(selectedAnswer);
    localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswer));
  })

  const handleSubmit = () => {
 
    navigate('/student/dashboard/report', { state: { selectedAnswer } })
  }
  return (
    <div className='w-full sm:w-[90%] md:w-[90%] lg:w-[60%] mx-auto flex flex-col p-4'>
      {/* exam description  */}
      <div className='w-full space-y-6'>
        <h1 className='text-2xl font-bold text-center' >Organic Chemistry 01</h1>
        <div className='flex items-center justify-between px-6'>
          <p className='font-semibold'>Marks : <span>20</span></p>
          <p className='font-semibold'>Time : <span>30 min</span></p>
        </div>

        <div className='w-full  grid grid-cols-1 space-y-4 py-4'>
          {
            dummyQuestions.map((question) => (
              <QuestionTemplate key={question.id} id={question.id} title={question.question} options={question.options} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />

            ))
          }
        </div>
        <div className='w-full flex justify-center'>
          <button onClick={handleSubmit} className='btn btn-outline btn-accent sm:btn-wide text-white hover:text-black font-bold '>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Exam