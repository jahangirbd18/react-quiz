// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// const Quizes = () => {
//     const quizData=useLoaderData();
//     console.log(quizData);
//     return (
//         <div>
//             <div>
//             <h1>Topic: {quizData.name}</h1>
//                 <h3>Number of Quizes: {quizData.total}</h3>                
//                 <h4>ID: {quizData.id}</h4>
//             </div>
//         <div>
//                <ol>
//                     {quizData.questions.map(question => (
//                         <li key={question.id}>
//                             <h6>{question.question }</h6>
//                             <h6>{question.correctAnswer }</h6>
//                             <ol>
//                                 {question.options.map((option, index) => (
//                                     <li key={index}>
//                                         <label>
//                                             <input type="radio" name={`question-${question.id}`} value={option} />
//                                             {option}
//                                         </label>
//                                     </li>
//                                 ))}
//                             </ol>
//                         </li>
//                     ))}
//                 </ol>
                
//            </div>        
//     </div>
//     );
// };

// export default Quizes;

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizes = () => {
    const quizData = useLoaderData();
    console.log(quizData);

    // State to store selected options
    const [selectedOptions, setSelectedOptions] = useState({});

    // Handler for selecting an option
    const handleOptionChange = (questionId, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [questionId]: option,
        }));
    };

    // Handler for checking the answer and showing a toast
    const checkAnswer = (questionId, correctAnswer) => {
        if (selectedOptions[questionId] === correctAnswer) {
            toast.success('Correct!');
        } else {
            toast.error('Wrong!');
        }
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
                            <h6 className="text-lg font-semibold">{question.question}</h6>
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
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
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



