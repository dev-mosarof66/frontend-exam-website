import React, { useContext, useEffect } from 'react';
import QuestionCard from '../../components/Teacher/QuestionCard';
import '../../css/public.css';
import context from '../../context/context';

function Publish() {

  const { createdExam, setCreatedExam } = useContext(context);

  useEffect(() => {
    document.title = 'Publish | Bee Master';
  }, []);

  const handlePublish = () => {




    localStorage.removeItem('createdExam');
    setCreatedExam([]);
  }

  return (
    <div className='w-full sm:w-[600px] lg:w-[700px] h-[90vh] overflow-y-scroll no-scroll mx-auto p-4 space-y-4 flex flex-col items-center xs:my-4'>
      <h1 className='text-xl sm:text-2xl font-bold text-center'>Review Question</h1>

      {createdExam && createdExam.length > 0 ? (
        createdExam.map((question, index) => (
          <div key={question.id} className='w-full space-y-2'>
            <QuestionCard question={question} index={index} />
          </div>
        ))
      ) : (
        <div className='w-full h-full flex justify-center items-center'>
          <h1 className='text-lg sm:text-2xl font-bold text-gray-500 text-center'>No Exam Created</h1>
        </div>
      )}

      <div className='w-full flex justify-center items-center'>
        <button onClick={handlePublish} className={`btn btn-accent btn-wide text-black font-bold ${createdExam && createdExam.length > 0 ? '' : 'hidden'}`}>Publish</button>
      </div>
    </div>
  );
}

export default Publish;
