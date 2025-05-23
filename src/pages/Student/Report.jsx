import React, { useEffect, useState } from 'react'
import { dummyQuestions } from '../../api/dummyQ';
import SolutionTemplate from '../../components/Student/SolutionTemplate';

function Report() {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  useEffect(() => {
    document.title = 'Report | Bee Master';
    const selectedAnswers = localStorage.getItem('selectedAnswers');
    if (selectedAnswers) {
      const answers = JSON.parse(selectedAnswers);
      console.log(answers);

    }



  }, [setSelectedAnswer]);
  return (
    <div className='w-full sm:w-[90%] md:w-[90%] lg:w-[60%] mx-auto flex flex-col items-start px-4 p-4 space-y-4'>
      <div className='w-full flex items-center justify-center'>
        <h1 className='text-2xl font-bold text-secondary'>Your Exam Summary</h1>
      </div>
      <div>
        <h2>Your Score: <span>12 out of 20</span></h2>
      </div>

      <div className='w-full flex flex-col space-y-3'>
        {
          dummyQuestions.map((answer) => (
            <SolutionTemplate key={answer.id} id={answer.id} title={answer.question} options={answer.options} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} answer={answer.correctAnswer} />
          ))
        }
      </div>
    </div>
  )
}

export default Report