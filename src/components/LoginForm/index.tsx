import { login } from '@/api/routes';
import { useToast } from '@/hooks/useToast';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function LoginForm() {
  const router = useRouter();
  const { showToast } = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await login(username, password);
      rememberMe ? localStorage.setItem("token", response) : null;
      router.push('home')
    } catch (error) {
      showToast(String(error));
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(`clicked + ${rememberMe}`);
  }, [rememberMe]);


  return (
    <div className="flex flex-col sm:w-96  w-full items-center align-center justify-items-center bg-white p-8 rounded shadow-black shadow-2xl ">
      <div className="mb-4 w-full">
        <label htmlFor="user  name" className="block text-gray-700 font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full border p-2  outline-primary rounded"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="password" className="block  text-gray-700 font-bold mb-2">
          Password
        </label>
        <div className='relative w-full'>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="w-full border outline-primary  p-2 "
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
      <div className='flex flex-row  w-full mb-2 justify-between text-slate-500'>
        <div onClick={() => { setRememberMe(!rememberMe) }} className=' hover:underline cursor-pointer flex flex-row items-center'>
          <div className={`${rememberMe ? "bg-primary" : "bg-white"}  shadowbox-xl w-4 h-4 rounded border mr-2`}>

          </div>
          <div>
            Remember Me
          </div>
        </div>
        <div className=' cursor-pointer hover:underline hover:text-slate-600 hover:font-underline-offset-1'>
          Forgot password?
        </div>
      </div>
      <button
        className="bg-primary w-full p-2 rounded hover:bg-light text-white "
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
};
