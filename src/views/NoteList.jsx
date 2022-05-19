import NoteListCom from '../components/NoteListCom';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function ShowNotes() {
  const { currentUser } = useUserContext();

  return (
    <>
      {!currentUser.email && (
        <div>
          <h1>
            Please{' '}
            <span>
              <Link to="/auth">SignIn</Link>
            </span>{' '}
            to see note details.
          </h1>
        </div>
      )}
      <h1>The big list of notes</h1>
      <NoteListCom />
    </>
  );
}
