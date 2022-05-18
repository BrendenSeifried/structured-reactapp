import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNotes } from '../services/FetchNotes';

export default function ShowNotes() {
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

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div>
        {note.map((item) => (
          <div key={item.id}>
            <Link to={`/${item.id}`}>
              <h1>{item.note}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
