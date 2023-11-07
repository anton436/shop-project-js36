import React, { createContext, useContext, useState } from 'react';
import fire from '../fire';

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleRegister = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;

          case 'auth/weak-password':
            setPasswordError(err.message);
            break;

          default:
            break;
        }
      });
  };

  const values = {
    user,
    email,
    password,

    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleRegister,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
