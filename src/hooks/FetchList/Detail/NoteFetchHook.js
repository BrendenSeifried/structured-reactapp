import { useEffect, useState } from 'react';
import { fetchNotes, fetchOneNote } from '../../../services/FetchNotes';
import { useParams } from 'react-router-dom';
import { useNoteContext } from '../../../context/NoteContext';

export function useTestFetch() {
  const {allNotes, dispatch} = useNoteContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const renderNotes = async () => {
      const info = await fetchNotes();
      dispatch({type:'LIST', payload: info});
      // setData(info);
      setLoading(false);
    };
    renderNotes();
  }, []);

  return [allNotes, loading, dispatch];
}

export function UserHook() {
  const { id } = useParams();
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

  return [note, loading, id];
}

// export default { useTestFetch, UserHook };
