import { Link } from 'react-router-dom';
import NoteListCom from '../../components/NoteList/NoteListCom';
import { useUserContext } from '../../context/UserContext';
import styles from './NoteList.css';

export default function ShowNotes() {
  const { currentUser } = useUserContext();

  return (
    <>
      {!currentUser.email && (
        <div className={styles.banner}>
          <h1>
            Please{' '}
            <span>
              <Link to="/auth">SignIn</Link>
            </span>{' '}
            to see note details.
          </h1>
        </div>
      )}
      <h1 className={styles.banner}>Quotes</h1>
      <NoteListCom />
    </>
  );
}
