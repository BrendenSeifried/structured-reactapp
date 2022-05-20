import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useNoteContext } from '../../context/NoteContext';
import { deleteNote, editNote } from '../../services/FetchNotes';

export default function NoteEditHook() {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const history = useHistory();
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
    history.push(`/`);
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
