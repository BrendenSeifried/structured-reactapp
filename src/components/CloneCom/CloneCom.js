import React, { useState } from 'react';
import { useNoteContext } from '../../context/NoteContext';
import { useUserContext } from '../../context/UserContext';

export default function CloneCom({ note, handleClone }) {
  const { data, setData, title, setTitle } = useNoteContext();

  if (!note) return null;
  setData(note.data);
  setTitle(note.title);

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
