import React from 'react';
import NoteEditHook from '../hooks/EditHook.js/NoteEditHook';

export default function EditNote() {
  const { note, setNote, submitChange, title, setTitle, remove } = NoteEditHook();

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

      <button onClick={submitChange}>Add</button>
      <button onClick={remove}>Delete</button>
    </div>
  );
}
