import { Link } from 'react-router-dom';
import { useTestFetch } from '../../hooks/FetchList/Detail/NoteFetchHook';

export default function noteListCom() {
  const [note, loading] = useTestFetch();

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
