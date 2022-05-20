import React, { useState } from 'react';

export default function CloneCom({ note, handleClone }) {
  //   const { submitClone, setTitle, setData, title } = Clone();
  const [title, setTitle] = useState(note.title);
  const [data, setData] = useState(note.note);

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

      <button>Add</button>
    </form>
  );
}
