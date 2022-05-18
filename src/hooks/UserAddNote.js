import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeNote } from '../services/FetchNotes';

export default function UserAddNote() {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const history = useHistory();

  const submitNote = async () => {
    try {
      await makeNote({ note, title });

      alert('New Note Added!');
      history.push('/');
    } catch (e) {
      alert('Oh no! Something went wrong.');
    }
  };
  return { note, setNote, submitNote, title, setTitle };
}
