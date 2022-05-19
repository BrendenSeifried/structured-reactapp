import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/LoginHooks/useAuth';
import { signInUser, signUpUser } from '../../services/fetchauth';

export default function AuthHook() {
  const { setCurrentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const [check, setCheck] = useState('sign-in');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (check === 'sign-in') {
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
    return {
      setCheck,
      check,
      error,
      handleSubmit,
      email,
      setEmail,
      password,
      setPassword,
    ];
  };
}
