import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeNote } from '../services/FetchNotes';

export default function UserAddNote() {
  //   const [note, setNote] = useState('');
  //   const [title, setTitle] = useState('');
  //   const [error, setError] = useState('');

  const history = useHistory();

  //   const submitNote = async () => {
  //     try {
  //       const data = await makeNote();
  //       setTitle(data);
  //       alert('New Note Added!');
  //       history.push('/'); /////GOES INTO DELETE
  //     } catch (e) {
  //       setError('Oh no! Something went wrong.');
  //     }

  //     return { title, setTitle, note, submitNote, error };
  //   };
  // }

  const [note, setNote] = useState('');

  const submitNote = async () => {
    try {
      const data = await makeNote({ note });
      setNote(data);
      alert('New Note Added!');
      history.push('/'); /////GOES INTO DELETE
    } catch (e) {
      alert('Oh no! Something went wrong.');
    }
  };
  return { note, setNote, submitNote };
}
