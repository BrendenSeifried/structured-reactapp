import React, { useState } from 'react';
import { useNoteContext } from '../../context/NoteContext';
import { useUserContext } from '../../context/UserContext';

export default function CloneCom({ note, handleClone }) {
  //   const { submitClone, setTitle, setData, title } = Clone();
  const [title, setTitle] = useState(note.title);
  const { data, setData } = useNoteContext();
  setData(note.data);
  // setTitle(note.title);

  const { currentUser } = useUserContext();

  // const { submitNote } = UserAddNote();
  // console.log(note);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // await submitClone(note);
    // history.push('/');
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
