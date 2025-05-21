import React, { useContext, useEffect } from 'react'
import QuestionCard from '../../components/Teacher/QuestionCard'
import '../../css/public.css'
import context from '../../context/context'

const demo = [
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Kolkata"
  },
]
function Publish() {

  const { createdExam } = useContext(context)
  console.log(createdExam);


  useEffect(() => {
    document.title = 'Publish | Bee Master';
  })
  return (
    <div className='w-[100%] sm:w-[600px] lg:w-[700px] h-[90vh]   overflow-y-scroll no-scroll  mx-auto p-4 space-y-4 flex flex-col items-center xs:my-4 '>
      <h1 className='text-xl sm:text-2xl font-bold text-center'>Review Question</h1>
      {
        createdExam != null ?
          createdExam.map((question, index) => (
            <div>
              <QuestionCard key={question.id} question={question} />
              <button className='btn btn-accent btn-wide text-black font-bold'>Publish</button>
            </div>
          ))
          :
          <div className='w-full h-full flex justify-center items-center'>
            <h1 className='text-lg sm:text-2xl font-bold text-gray-500 text-center'>No Exam Created</h1>
          </div>
      }
    </div>
  )
}

export default Publish