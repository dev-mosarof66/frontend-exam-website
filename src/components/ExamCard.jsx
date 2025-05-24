import React, { useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

function ExamCard({ Questions, setQuestions, handleAddQuestion, handleRemoveQuestion, id, item, index }) {

    const handleChange = (field, value) => {
        const updatedQuestions = Questions.map((q) =>
            q.id === id ? { ...q, [field]: value } : q
        );
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (optIndex, value) => {
        const updatedQuestions = Questions.map((q) => {
            if (q.id !== id) return q;
            const newOptions = [...q.options];
            newOptions[optIndex] = value;
            return { ...q, options: newOptions };
        });
        setQuestions(updatedQuestions);
    };

    // Set the page title once on mount
    useEffect(() => {
        document.title = `Create Exam | Bee Master`;
    }, []);

    return (
        <div className='w-[90%] mx-auto flex flex-col items-center gap-4'>

            {/* Question Title */}
            <div className='w-[90%] flex flex-col space-y-3'>
                <p className='font-semibold text-lg'>{index + 1}. </p>
                <div className='w-full flex justify-center items-center gap-2'>
                    <div className={`w-full border-2 p-2 px-4 border-gray-400/20`}>
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
                {['A', 'B', 'C', 'D'].map((opt, optIndex) => (
                    <div key={opt} className='w-full relative'>
                        <div className={`w-full border-2 p-2 px-4 ${item.options[optIndex].trim() === '' ? 'border-gray-400/20' : 'border-gray-400/20'}`}>
                            <input
                                spellCheck={false}
                                type='text'
                                value={item.options[optIndex]}
                                onChange={(e) => handleOptionChange(optIndex, e.target.value)}
                                placeholder={`Option ${opt}`}
                                className='w-full outline-none'
                            />
                        </div>

                        {/* Add / Remove icons */}
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
                    className={`select select-bordered w-full max-w-xs outline-none ${item.answer.trim() === '' ? 'border-gray-400' : ''}`}
                >
                    <option value="" disabled>Select answer</option>
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
