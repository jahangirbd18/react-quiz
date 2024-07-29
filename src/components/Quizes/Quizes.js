import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const quizData=useLoaderData();
    console.log(quizData);
    return (
        <div>
            <div>
            <h1>Topic: {quizData.name}</h1>
                <h3>Number of Quizes: {quizData.total}</h3>                
                <h4>ID: {quizData.id}</h4>
            </div>
        <div>
               <ol>
                    {quizData.questions.map(question => (
                        <li key={question.id}>
                            <h6>{question.question }</h6>
                            <h6>{question.correctAnswer }</h6>

                            <ol>
                                {question.options.map((option, index) => (
                                    <li key={index}>
                                        <label>
                                            <input type="radio" name={`question-${question.id}`} value={option} />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ol>
                
           </div>        
    </div>
    );
};

export default Quizes;


