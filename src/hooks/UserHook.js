import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneNote } from '../services/FetchNotes';


export default function UserHook() {
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
    


  return { note, loading };
}
