import React from 'react'
import { QuestionTemplate } from '../../components/Student/ExamCard'


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
function Exam() {
  return (
    <div className='w-full flex flex-col p-4'>
      {/* exam description  */}
      <div className='w-full space-y-3'>
        <h1 className='text-2xl font-bold text-center' >Organic Chemistry 01</h1>
        <div className='flex items-center justify-between px-6'>
          <p className='font-semibold'>Marks : <span>20</span></p>
          <p className='font-semibold'>Time : <span>30 min</span></p>
        </div>

        <div className='w-full flex flex-col space-y-4'>
          <QuestionTemplate demo={demo} />
        </div>
      </div>
    </div>
  )
}

export default Exam