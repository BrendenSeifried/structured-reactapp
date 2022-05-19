// import React from 'react';
import { useUserContext } from '../context/UserContext';
import { logout } from '../services/fetchauth';

export default function Header() {
  const { currentUser } = useUserContext();

  const out  = async () => {
    await logout();
    window.location.reload();
  };
  return (
    <>
      {currentUser.email && (
        <div>
          <button onClick={out}>Sign Out</button>
          <h1>Welcome: ({currentUser.email})</h1>
        </div>
      )}
    </>
  );
}
