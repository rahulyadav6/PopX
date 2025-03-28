import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : {};
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedCurrentUser = localStorage.getItem('currentUser');
    return savedCurrentUser ? JSON.parse(savedCurrentUser) : {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      companyName: '',
      isAgency: 'No',
      profilePic: null
    };
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [users, currentUser]);

  const registerUser = (userData) => {
    const { email } = userData;
    
    setUsers(prevUsers => ({
      ...prevUsers,
      [email]: {
        ...userData,
        profilePic: null 
      }
    }));
    
    setCurrentUser({
      ...userData,
      profilePic: null
    });
    
    console.log(`Registered new user: ${email}`);
  };

  const loginUser = (email) => {
    if (users[email]) {
      const userData = users[email];
      setCurrentUser(userData);
      console.log(`Logged in as: ${email}`);
      return true;
    } else {
      console.log(`User not found: ${email}`);
      return false;
    }
  };

  const updateCurrentUser = (newData) => {
    setCurrentUser(prevData => {
      const updated = { ...prevData, ...newData };
      return updated;
    });
    
    if (currentUser.email) {
      setUsers(prevUsers => ({
        ...prevUsers,
        [currentUser.email]: {
          ...prevUsers[currentUser.email],
          ...newData
        }
      }));
    }
  };

  const value = {
    currentUser,
    users,
    registerUser,
    loginUser,
    updateCurrentUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};