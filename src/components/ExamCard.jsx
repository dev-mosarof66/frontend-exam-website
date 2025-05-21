import React, { useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

function ExamCard({ Questions, setQuestions, handleAddQuestion, handleRemoveQuestion, id, item, index }) {

    const handleChange = (field, value) => {
        const updatedQuestions = Questions.map((q) =>
            q.id === id ? { ...q, [field]: value } : q
        );
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (optionKey, value) => {
        const updatedQuestions = Questions.map((q) =>
            q.id === id
                ? { ...q, options: { ...q.options, [optionKey]: value } }
                : q
        );
        setQuestions(updatedQuestions);
    };

    //page title change
    useEffect(() => {
        document.title = `Create Exam | Bee Master`;
    })

    return (
        <div className='w-[90%] mx-auto flex flex-col items-center gap-4'>

            {/* Title */}
            <div className='w-[90%] flex flex-col space-y-3'>
                <div className='w-full flex justify-center items-center gap-2'>
                    <p className='font-semibold text-lg'>{index + 1}. </p>
                    <div className='w-full border-2 border-gray-400/20 p-2 px-4'>
                        <input
                            spellCheck={false}
                            type="text"
                            value={item.title}
                            onChange={(e) => handleChange("title", e.target.value)}
                            placeholder="Question Title"
                            className='w-full outline-none'
                        />
                    </div>
                </div>

                {/* Options */}
                {['A', 'B', 'C', 'D'].map((opt) => (
                    <div key={opt} className='w-full relative'>
                        <div className='w-full border-2 border-gray-400/20 p-2 px-4'>
                            <input
                                spellCheck={false}
                                type='text'
                                value={item.options[opt]}
                                onChange={(e) => handleOptionChange(opt, e.target.value)}
                                placeholder={`Option ${opt}`}
                                className='w-full outline-none'
                            />
                        </div>

                        {/* Show icons only for A and D for layout balance */}
                        {opt === 'A' && (
                            <div
                                onClick={() => handleAddQuestion(id)}
                                className='text-white absolute top-4 -right-6 cursor-pointer hover:text-green-500 transition tooltip tooltip-left tooltip-accent'
                                data-tip='Add New Question'
                            >
                                <FaPlus />
                            </div>
                        )}

                        {opt === 'D' && (
                            <div
                                onClick={() => handleRemoveQuestion(id)}
                                className='text-white absolute bottom-4 -right-6 cursor-pointer hover:text-red-500 transition tooltip tooltip-left tooltip-accent'
                                data-tip='Delete Question'
                            >
                                <FaMinus />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Answer Selector */}
            <div className='w-[90%] flex items-center space-x-3'>
                <label className="label">
                    <span className="label-text">Answer</span>
                </label>
                <select
                    value={item.answer}
                    onChange={(e) => handleChange("answer", e.target.value)}
                    className="select select-bordered w-full max-w-xs outline-none"
                >
                    {['A', 'B', 'C', 'D'].map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            </div>
            <div className='w-full h-[1px] bg-gray-400/20' />

        </div>
    );
}

export default ExamCard;
