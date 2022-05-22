import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useNoteContext } from '../../context/NoteContext';
import { makeNote } from '../../services/FetchNotes';

export default function userAddNote() {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const history = useHistory();
  const { allNotes, dispatch } = useNoteContext();

  const submitNote = async () => {
    try {
      const data = await makeNote({ note, title });
      dispatch({ type: 'ADD', payload: data });

      alert('New Note Added!');
      history.push('/');
    } catch (e) {
      alert('Oh no! Something went wrong.');
    }
  };
  return { allNotes, dispatch, note, setNote, submitNote, title, setTitle };
}
