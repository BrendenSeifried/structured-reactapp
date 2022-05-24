import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { signOutUser } from '../../services/fetchauth';
import styles from './Header.css';
export default function header() {
  const { currentUser } = useUserContext();

  const out = async () => {
    await signOutUser();
    window.location.reload();
  };

  return (
    <div>
      {currentUser.email && (
        <div className={styles.header}>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/new">
            <button>Create Note</button>
          </Link>
          <button onClick={out}>Sign Out</button>
        </div>
      )}
      {currentUser.email && (
        <div>
          <h1 className={styles.welcome}>Welcome: ({currentUser.email})</h1>
        </div>
      )}
    </div>
  );
}
