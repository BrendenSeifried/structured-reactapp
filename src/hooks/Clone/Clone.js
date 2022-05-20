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
  const { note } = UserHook();
  console.log(note.title, note.note);

  // const [data, setData] = useState('');
  // const [title, setTitle] = useState('');
  // const history = useHistory();
  const { allNotes, dispatch } = useNoteContext();
  // const copyNote = { title, note };
  // console.log('copynote', copyNote);

  const submitClone = async (note) => {
    console.log('note on 46', note);
    try {
      const info = await makeNote(note);
      // Data(note);
      dispatch({ type: 'CLONE', payload: info });

      // setData(info.note);
      // setTitle(info.title);

      alert('Cloning complete.');
      // history.push('/');
    } catch (e) {
      alert('Clone vat failure.');
    }
  };
  return { allNotes, dispatch, submitClone };
}
