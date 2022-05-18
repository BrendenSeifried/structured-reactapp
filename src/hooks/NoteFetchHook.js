import { useEffect, useState } from 'react';
import { fetchNotes } from '../services/FetchNotes';

function useTestFetch() {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const renderNotes = async () => {
      const data = await fetchNotes();
      setNote(data);
      setLoading(false);
    };
    renderNotes();
  }, []);

  return { note, loading };
}

export default useTestFetch;
