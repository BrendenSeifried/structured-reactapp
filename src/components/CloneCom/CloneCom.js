import React from 'react';
import Clone from '../../hooks/Clone/Clone';
import { UserHook } from '../../hooks/FetchList/Detail/NoteFetchHook';
import UserAddNote from '../../hooks/UserAddNote';
// import NoteEditHook from '../hooks/EditHook.js/NoteEditHook';

export default function CloneCom() {
  const { data, submitClone, setTitle, setData, title } = Clone();
  const [note] = UserHook();
  //   const { submitNote } = UserAddNote();
  //   console.log(note);

  return (
    <div>
      <label className="info">
        {' '}
        Title:
        <input
          type="text"
          value={note.title}
          //   onChange={(e) => setData(e.target.value)}
        />
      </label>
      <label className="info">
        {' '}
        Note:
        <input
          type="text"
          value={note.note}
          //   onChange={(e) => setNote(e.target.value)}
        />
      </label>

      <button onClick={submitClone}>Add</button>
      {/* <button onClick={remove}>Delete</button> */}
    </div>
  );
}
