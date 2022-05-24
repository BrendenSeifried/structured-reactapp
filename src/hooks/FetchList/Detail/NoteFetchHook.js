import { useEffect, useState } from 'react';
import {
  fetchNotes,
  fetchOneNote,
  makeNote,
} from '../../../services/FetchNotes';
import { useNoteContext } from '../../../context/NoteContext';

export function fetchAllNotes() {
  const { allNotes, dispatch } = useNoteContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const renderNotes = async () => {
      const info = await fetchNotes();
      dispatch({ type: 'LIST', payload: info });
      setLoading(false);
    };
    renderNotes();
  }, []);

  return { allNotes, loading, dispatch };
}

export function fetchNoteById(id) {
  const { dispatch } = useNoteContext();

  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState('');

  useEffect(() => {
    const grabOneNote = async () => {
      const data = await fetchOneNote(id);
      setNote(data);
      setLoading(false);
    };

    grabOneNote();
  }, [id]);
  const clone = async (data) => {
    const info = await makeNote(data);
    dispatch({ type: 'CLONE', payload: info });
  };

  return { note, loading, clone };
}
