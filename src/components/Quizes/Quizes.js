import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/outline'; 
import 'react-toastify/dist/ReactToastify.css';

const Quizes = () => {
    const quizData = useLoaderData();
    console.log(quizData);

    const [selectedOptions, setSelectedOptions] = useState({});
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [showCorrectAnswers, setShowCorrectAnswers] = useState({}); 

    const handleOptionChange = (questionId, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [questionId]: option,
        }));
    };

    const checkAnswer = (questionId, correctAnswer) => {
        if (selectedOptions[questionId] === correctAnswer) {
            toast.success('Correct!');
            setCorrectAnswersCount((prevCount) => prevCount + 1);
        } else {
            toast.error('Wrong!');
        }

        toast.info(`Total Correct Answers: ${correctAnswersCount + 1}`);
    };

    const toggleCorrectAnswer = (questionId) => {
        setShowCorrectAnswers((prev) => ({
            ...prev,
            [questionId]: !prev[questionId],
        }));
    };

    return (
        <div className="p-6">
            <div>
                <h1 className="text-2xl font-bold">Topic: {quizData.name}</h1>
                <h3 className="text-lg">Number of Quizes: {quizData.total}</h3>
                <h4 className="text-md">ID: {quizData.id}</h4>
            </div>
            <div>
                <ol>
                    {quizData.questions.map((question) => (
                        <li key={question.id} className="mb-4">
                            <div className="flex items-center">
                                <h6 className="text-lg font-semibold">{question.question}</h6>
                                <EyeIcon
                                    className="w-6 h-6 ml-2 cursor-pointer"
                                    onClick={() => toggleCorrectAnswer(question.id)}
                                />
                            </div>
                            {showCorrectAnswers[question.id] && (
                                <h6 className="text-green-500 font-semibold">
                                    Correct Answer: {question.correctAnswer}
                                </h6>
                            )}
                            <ol className="list-decimal ml-5">
                                {question.options.map((option, index) => (
                                    <li key={index} className="my-2">
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${question.id}`}
                                                value={option}
                                                checked={selectedOptions[question.id] === option}
                                                onChange={() => handleOptionChange(question.id, option)}
                                                className="mr-2"
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ol>
                            <button
                                type="button"
                                onClick={() => checkAnswer(question.id, question.correctAnswer)}
                                className="bg-blue-500 text-white rounded"
                            >
                                Submit
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Quizes;
