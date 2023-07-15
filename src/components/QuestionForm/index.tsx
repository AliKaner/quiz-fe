import { useState } from 'react';

interface CreationFormProps {
  onSubmit: (question: string, answerOne: string, answerTwo: string) => void;
}

const CreationForm: React.FC<CreationFormProps> = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [answerOne, setAnswerOne] = useState('');
  const [answerTwo, setAnswerTwo] = useState('');

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleAnswerOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswerOne(event.target.value);
  };

  const handleAnswerTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswerTwo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(question, answerOne, answerTwo);

    setQuestion('');
    setAnswerOne('');
    setAnswerTwo('');
  };

  return (
    <form className="max-w-sm mx-auto p-4 bg-white shadow-md rounded" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="question" className="block text-gray-700 font-bold mb-2">
          Question
        </label>
        <input
          type="text"
          id="question"
          className="w-full border border-gray-300 p-2 rounded"
          value={question}
          onChange={handleQuestionChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="answerOne" className="block text-gray-700 font-bold mb-2">
          Answer One
        </label>
        <input
          type="text"
          id="answerOne"
          className="w-full border border-gray-300 p-2 rounded"
          value={answerOne}
          onChange={handleAnswerOneChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="answerTwo" className="block text-gray-700 font-bold mb-2">
          Answer Two
        </label>
        <input
          type="text"
          id="answerTwo"
          className="w-full border border-gray-300 p-2 rounded"
          value={answerTwo}
          onChange={handleAnswerTwoChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Create
      </button>
    </form>
  );
};

export default CreationForm;
