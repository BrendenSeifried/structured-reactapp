import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNoteContext } from '../../context/NoteContext';
import { deleteNote, editNote } from '../../services/FetchNotes';

export default function noteEdit() {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const { id } = useParams();
  const { allNotes, dispatch } = useNoteContext();

  const submitChange = async () => {
    try {
      const data = await editNote({ id, note, title });
      dispatch({ type: 'EDIT', payload: data });

      window.location.reload();
    } catch {
      alert('Oh no! Something went wrong.');
    }
  };

  const remove = async () => {
    await deleteNote(id);
  
  };

  return {
    allNotes,
    dispatch,
    id,
    note,
    title,
    setTitle,
    setNote,
    submitChange,
    remove,
  };
}
