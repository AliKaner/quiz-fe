import { register } from '@/api/routes';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = () => {
    register(username, password);
    router.push('login');
  };

  return (
    <div className="flex flex-col sm:w-96  w-full items-center align-center justify-items-center bg-white p-8 rounded shadow-black shadow-2xl">
      <div className="mb-4 w-full">
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full border p-2 outline-primary rounded"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password
        </label>
        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="w-full border p-2 outline-primary rounded"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            className="absolute text-sm text-grey-200 right-2 top-1/2 transform -translate-y-1/2"
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      <button className="bg-primary w-full p-2 rounded hover:bg-light text-white" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};
