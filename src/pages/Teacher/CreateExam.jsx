import React, { useContext, useState, useEffect, useRef } from 'react';
import ExamCard from '../../components/ExamCard';
import '../../css/public.css';
import context from '../../context/context';

function CreateExam() {
  const blankQuestion = (id) => ({
    id,
    title: "",
    options: ["", "", "", ""],
    answer: ""
  });

  const [Question, setQuestion] = useState([blankQuestion(1)]);
  const nextId = useRef(2); // Start from 2 since 1 is used
  const { setCreatedExam } = useContext(context);

  const handleAddQuestion = (afterId) => {
    const newId = nextId.current++;
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
    const isValid = Question.every(q =>
      q.title.trim() &&
      q.options.some(opt => opt.trim()) &&
      q.answer.trim()
    );

    if (!isValid) {
      alert("Please complete all questions before saving.");
      return;
    }

    console.log("Saved questions:", Question);
    setCreatedExam(Question);
    localStorage.setItem('createdExam', JSON.stringify(Question));
  };

  // Scroll to bottom on question count change
  useEffect(() => {
    const container = document.querySelector('.overflow-y-scroll');
    container?.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }, [Question.length]);

  return (
    <div className='w-full h-[90vh] xs:h-screen flex flex-col items-center py-4 space-y-6 no-scroll'>

      <h1 className='text-2xl sm:text-3xl font-bold text-gray-400'>Create Exam</h1>

      <div className='w-[90%] h-[90vh] overflow-y-scroll no-scroll lg:w-[70%] mx-auto space-y-6'>
        {Question.map((item, index) => (
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
