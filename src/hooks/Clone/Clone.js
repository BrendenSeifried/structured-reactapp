// // import React, { useEffect } from 'react';
// import { useEffect } from 'react';
// import { fetchNotes, fetchOneNote, makeNote } from '../../services/FetchNotes';

// export default function Clone(id) {
//   useEffect(() => {
//     const grabNote = async () => {
//       const data = await fetchOneNote(id);
//       console.log(data);
//     };
//     grabNote();
//   }, [id]);

//   const submitClone = async (id) => {
//     try {
//       await makeNote({ title, note });
//       alert('Note Cloned!');
//       history.push('/');
//     } catch (e) {
//       alert('Oh no! Note not cloned.');
//     }
//   };
//   return { submitClone };
// }

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useNoteContext } from '../../context/NoteContext';
import { makeNote } from '../../services/FetchNotes';
import { UserHook } from '../FetchList/Detail/NoteFetchHook';
// import { useNoteContext } from '../context/NoteContext';
// import { makeNote } from '../services/FetchNotes';

export default function UserAddNote() {
  const [note] = UserHook();

  const [data, setData] = useState('');
  const [title, setTitle] = useState('');
  const history = useHistory();
  const { allNotes, dispatch } = useNoteContext();

  const submitClone = async () => {
    try {
      const info = await makeNote({ note, title });
      // Data(note);
      dispatch({ type: 'CLONE', payload: data });

      // setData(info.note);
      // setTitle(info.title);

      alert('Cloning complete.');
      history.push('/');
    } catch (e) {
      alert('Clone vat failure.');
    }
  };
  return { allNotes, dispatch, data, setData, submitClone, title, setTitle };
}
