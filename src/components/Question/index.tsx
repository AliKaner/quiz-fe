import React from 'react';
import { Answer } from '../Answer';
import { QuestionType } from '@/shared/types';

export function Question({ question }: { question: QuestionType }) {
    const answerClickHandle = () => {
        console.log('answer click handle');
    };

    return (
        <div className="flex  flex-col items-center shadow-2xl p-8 justify-between w-full md:w-3/4 bg-secondary items-between text-white">
            <div className="p-4 text-4xl">{question.text}</div>
            <div className="flex flex-row gap-8 p-4 flex-col md:flex-row w-full bg-secondary">
                {question.answers.map((answer, index) => (
                    <Answer key={index} onClick={answerClickHandle} answer={answer} />
                ))}
            </div>
        </div>
    );
}
