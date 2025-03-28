import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const SigninPage = () => {
  const navigate = useNavigate();
  const { loginUser, users } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Login attempt with:', email);
    
    if (users[email]) {
      const success = loginUser(email);
      if (success) {
        alert('Login successful!');
        navigate('/profile');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } else {
      console.log('User not found');
      setError(`No account found with email: ${email}`);
    }
  };

  return (
    <div className='flex flex-col items-center justify-end min-h-screen px-6 text-center bg-white'>
        <div className='flex flex-col w-full max-w-md min-h-screen p-6 bg-[#fbfbfb] rounded-lg shadow-md'>
            <h1 className='mb-3 text-3xl font-bold text-left'>Signin to your PopX account</h1>
            <p className='mb-5 text-left text-gray-500 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, beatae.</p>
            <form className='space-y-3.5' onSubmit={handleSubmit}>
                <div className='relative'>
                    <input 
                      required 
                      id="email"
                      className='block px-2.5 pb-3 pt-3.5 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer'
                      placeholder=''
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email" className='absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4'>Email
                    </label>
                </div>
                <div className='relative'>
                    <input 
                      required 
                      id="password"
                      className='block px-2.5 pb-3 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer'
                      placeholder=''
                      type='password'
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password" className='absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4'>Password
                    </label>
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                <div className='mt-20 mb-4'>
                    <button type='submit' className='w-full py-2 text-white bg-[#9445ee] rounded-md hover:bg-[#6f28c0]'>Login</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default SigninPage;