// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null);

  const setLogin = (data) => {
    setLoginData(data);
  };

  return (
    <AuthContext.Provider value={{ loginData, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
