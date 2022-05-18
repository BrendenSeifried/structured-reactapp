import React from 'react';
import UserAddNote from '../hooks/UserAddNote';

export default function AddNote() {
  const { note, setNote, submitNote, title, setTitle } = UserAddNote();

  return (
    <div>
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
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </label>

      <button onClick={submitNote}>Add</button>
    </div>
  );
}
