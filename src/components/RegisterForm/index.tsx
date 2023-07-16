import { register } from '@/api/routes';
import {  useState } from 'react';

export const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    register(username,password);
  };

  return (
    <div className="flex flex-col items-center align-center justify-items-center bg-primary-light p-8 rounded shadow-black shadow-2xl ">
      <div className="mb-4">
        <label htmlFor="user  name" className="block text-gray-700 font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full border border-gray-300 p-2 rounded"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full border border-gray-300 p-2 "
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button
        className="bg-secondary w-full p-2 rounded hover:bg-primary text-white"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
    </div>
  );
};
