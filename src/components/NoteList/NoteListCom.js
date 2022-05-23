import { Link } from 'react-router-dom';
import { fetchAllNotes } from '../../hooks/FetchList/Detail/NoteFetchHook';
import styles from './NoteListCom.css';

export default function noteListCom() {
  const [note, loading] = fetchAllNotes();

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div className={styles.background}>
        {note.map((item) => (
          <div key={item.id} >
            <Link to={`/${item.id}`}className={styles.text}>
              <h1 className={styles.text}>Author: {item.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
