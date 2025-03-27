import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'No'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful!');
    navigate('/profile');
    
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
                      className='block px-2.5 pb-3 pt-3.5 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer'
                      placeholder=''
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label className='absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4'>Email
                    </label>
                </div>
                <div className='relative'>
                    <input 
                      required 
                      className='block px-2.5 pb-3 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer'
                      placeholder=''
                      type='password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <label className='absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4'>Password
                    </label>
                </div>
                <div className='mt-20 mb-4'>
                    <button type='submit' className='w-full py-2 text-white bg-[#9445ee] rounded-md hover:bg-[#6f28c0]'>Login</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default SignupPage;