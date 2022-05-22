import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { signOutUser } from '../../services/fetchauth';

export default function header() {
  const { currentUser } = useUserContext();

  const out = async () => {
    await signOutUser();
    window.location.reload();
  };

  return (
    <>
      {currentUser.email && (
        <div>
          <button onClick={out}>Sign Out</button>
          <h1>Welcome: ({currentUser.email})</h1>
        </div>
      )}
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/new">
          <button>Create Note</button>
        </Link>
      </div>
    </>
  );
}
