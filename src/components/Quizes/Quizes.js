import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/outline';
import 'react-toastify/dist/ReactToastify.css';

const Quizes = () => {
    const quizData = useLoaderData();

    const [selectedOptions, setSelectedOptions] = useState({});
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
    const [submittedQuestions, setSubmittedQuestions] = useState({});
    const [showCorrectAnswers, setShowCorrectAnswers] = useState({});

    const handleOptionChange = (questionId, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [questionId]: option,
        }));
    };

    const checkAnswer = (questionId, correctAnswer) => {
        if (!submittedQuestions[questionId]) {
            const isCorrect = selectedOptions[questionId] === correctAnswer;
            if (isCorrect) {
                toast.success('Correct!');
                setCorrectAnswersCount((prevCount) => prevCount + 1);
            } else {
                toast.error('Wrong!');
                setWrongAnswersCount((prevCount) => prevCount + 1);
            }

            setSubmittedQuestions((prev) => ({
                ...prev,
                [questionId]: true,
            }));

            toast.info(`Total Correct Answers: ${correctAnswersCount + (isCorrect ? 1 : 0)}`);
            toast.info(`Total Wrong Answers: ${wrongAnswersCount + (isCorrect ? 0 : 1)}`);
        }
    };

    const toggleCorrectAnswer = (questionId) => {
        setShowCorrectAnswers((prev) => ({
            ...prev,
            [questionId]: !prev[questionId],
        }));
    };

    if (!quizData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6">
            <div>
                <h1 className="text-2xl font-bold">Topic: {quizData.name}</h1>
                <h3 className="text-lg">Number of Quizzes: {quizData.total}</h3>
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
                                                disabled={submittedQuestions[question.id]}
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ol>
                            <button
                                type="button"
                                onClick={() => checkAnswer(question.id, question.correctAnswer)}
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ${submittedQuestions[question.id] ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={submittedQuestions[question.id]}
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

