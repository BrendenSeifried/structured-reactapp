import React, { useState } from 'react';
import { useUserContext } from '../../context/UserContext';

export default function CloneCom({ note, handleClone }) {
  if (!note) return null;
  const [data, setData] = useState(note.data);
  const [title, setTitle] = useState(note.title);

  const { currentUser } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClone({ title, note: data });
  };
  return (
    <form onSubmit={handleSubmit}>
      {!currentUser && (
        <>
          <label className="info">
            {' '}
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="info">
            {' '}
            Note:
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </label>
        </>
      )}
      <button>Confirm</button>
    </form>
  );
}
