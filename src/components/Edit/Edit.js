import React from 'react';
import { useHistory } from 'react-router-dom';
import NoteEditHook from '../../hooks/EditHook.js/NoteEditHook';

export default function editNote() {
  const { note, setNote, submitChange, title, setTitle, remove } =
    NoteEditHook();

  const history = useHistory();
  const handleRemove = async () => {
    await remove();
    history.push('/');
  };
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
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
}
