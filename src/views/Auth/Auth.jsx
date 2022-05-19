import React, { useState } from 'react';
import style from './Auth.css';
import AuthHook from '../../hooks/LoginHooks/AuthHook';
export default function Authorize() {
  return (
    <>
      <div className="txt">
        <h1
          className={check === 'sign-in' ? style.active : style.blank}
          onClick={() => setCheck('sign-in')}
        >
          Sign in
        </h1>

        <h1
          className={check === 'sign-up' ? style.active : style.blank}
          onClick={() => setCheck('sign-up')}
        >
          Sign up
        </h1>
      </div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
