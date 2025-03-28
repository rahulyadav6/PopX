import React, { useRef, useContext } from 'react';
import { Camera } from 'lucide-react';
import { UserContext } from '../context/UserContext';

const ProfileSettings = () => {
  const { currentUser, updateCurrentUser } = useContext(UserContext);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateCurrentUser({ profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const defaultAvatar = 'https://via.placeholder.com/100';

  return (
    <div className='flex flex-col items-center justify-end min-h-screen px-6 text-center bg-white'>
      <div className='flex flex-col w-full max-w-md min-h-screen bg-[#fbfbfb] shadow-md'>
        <h1 className='p-4 mb-4 text-2xl font-bold text-left bg-white'>Account Settings</h1>
        <div className='flex items-center gap-4 p-4'>
          <div className='relative'>
            <div 
              className='relative cursor-pointer'
              onClick={triggerFileInput}
            >
              <img 
                alt='User Avatar' 
                className='object-cover w-24 h-24 border-2 border-gray-300 rounded-full' 
                src={currentUser.profilePic || defaultAvatar}
              />
              <span className='absolute bottom-0 right-0 p-2 bg-gray-200 rounded-full'>
                <Camera size={16} />
              </span>
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              className='hidden' 
              accept='image/*'
              onChange={handleImageChange}
            />
          </div>

          <div className='flex flex-col text-left'>
            <h3 className='text-lg font-bold'>{currentUser.fullName}</h3>
            <p className='text-sm text-gray-500'>Email: {currentUser.email}</p>
            <p className='text-sm text-gray-500'>Company: {currentUser.companyName}</p>
          </div>
        </div>

        <div className='p-4 mt-6 text-left'>
          <h2 className='font-semibold text-purple-500'>Bio Section</h2>
          <p className='text-gray-500 text-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod consectetur? Animi adipisci dicta modi itaque, praesentium illo hic est.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;