import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { useUserContext } from '../../context/UserContext';
import { useAuth } from '../../hooks/LoginHooks/useAuth';
import { signInUser, signUpUser } from '../../services/fetchauth';

export default function AuthHook() {
 const history = useHistory();
  const { setCurrentUser } = useUserContext();
  const {
    email,
    setEmail,
    password,
    setPassword,
    type,
    setType,
    error,
    setError,
  } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === 'sign-in') {
        const data = await signInUser({ email, password });
        setCurrentUser(data);
        history.push('/');
      } else {
        const data = await signUpUser({ email, password });
        setCurrentUser(data);
        history.push('/');
      }
    } catch (error) {
      setError(error.message);
    }
    return [
      setType,
      type,
      error,
      handleSubmit,
      email,
      setEmail,
      password,
      setPassword,
    ];
  };
}
