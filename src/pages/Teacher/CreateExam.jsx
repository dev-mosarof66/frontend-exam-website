import React, { useContext, useState } from 'react';
import ExamCard from '../../components/ExamCard';
import '../../css/public.css';
import context from '../../context/context'

function CreateExam() {
  const blankQuestion = (id) => ({
    id,
    title: "",
    options: ["", "", "", ""],
    answer: ""
  });

  const [Question, setQuestion] = useState([blankQuestion(1)]);
  const {setCreatedExam} = useContext(context)

  const handleAddQuestion = (afterId) => {
    const newId = Question.length > 0 ? Math.max(...Question.map(q => q.id)) + 1 : 1;
    const newQuestion = blankQuestion(newId);

    const index = Question.findIndex(q => q.id === afterId);
    const updated = [
      ...Question.slice(0, index + 1),
      newQuestion,
      ...Question.slice(index + 1)
    ];
    setQuestion(updated);
  };

  const handleRemoveQuestion = (idToRemove) => {
    if (Question.length === 1) return; // prevent deleting the last one
    const updated = Question.filter(q => q.id !== idToRemove);
    setQuestion(updated);
  };

  const handleSave = () => {
    console.log("Saved questions:", Question);
    setCreatedExam(Question)
  };

  return (
    <div className='w-full h-[90vh] xs:h-screen flex flex-col items-center py-4 space-y-6 no-scroll'>

      <h1 className='text-2xl sm:text-3xl font-bold text-gray-400'>Create Exam</h1>
      <div className='w-[90%] h-[90vh] overflow-y-scroll no-scroll lg:w-[70%] mx-auto space-y-6'>
        {Question.map((item,index) => (
          <ExamCard
            key={item.id}
            Questions={Question}
            setQuestions={setQuestion}
            index={index}
            id={item.id}
            item={item}
            handleAddQuestion={handleAddQuestion}
            handleRemoveQuestion={handleRemoveQuestion}
          />
        ))}
      </div>

      <div className='w-[90%] lg:w-[70%] mx-auto flex items-center justify-center'>
        <button onClick={handleSave} className='btn btn-accent text-black btn-wide w-full font-bold'>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateExam;
