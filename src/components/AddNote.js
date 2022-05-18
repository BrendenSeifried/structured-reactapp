import React from 'react';
import UserAddNote from '../hooks/UserAddNote';

export default function AddNote() {
  const { note, setNote, submitNote } = UserAddNote();

  return (
    <div>
      <label className="info">
        {' '}
        Name:
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
