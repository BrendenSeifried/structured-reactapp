import React from 'react';
import NoteEditHook from '../hooks/EditHook.js/NoteEditHook';

export default function AddNote() {
  const { note, setNote, submitChange, title, setTitle,remove } = NoteEditHook();
  console.log('note', note);
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
          placeholder='change note here'
          onChange={(e) => setNote(e.target.value)}
        />
      </label>

      <button onClick={submitChange}>Add</button>
      <button onClick={remove}>Delete</button>
    </div>
  );
}
