// import { useHistory } from 'react-router-dom';
import style from './Login.css';
// import { useUserContext } from '../../context/UserContext';
// import { signInUser, signUpUser } from '../../services/fetchauth';
// import { useAuthContext } from '../../context/AuthContext';
import AuthHook from '../../hooks/LoginHooks/AuthHook';

export default function Login() {
  const [
    setType,
    type,
    error,
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
  ] = AuthHook();
  // // const history = useHistory();
  // // const { setCurrentUser } = useUserContext();
  // const {
  //   email,
  //   setEmail,
  //   password,
  //   setPassword,
  //   type,
  //   setType,
  //   error,
  //   setError,
  // } = useAuthContext();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (type === 'sign-in') {
  //       const data = await signInUser({ email, password });
  //       setCurrentUser(data);
  //       history.push('/');
  //     } else {
  //       const data = await signUpUser({ email, password });
  //       setCurrentUser(data);
  //       history.push('/');
  //     }
  //   } catch (error) {
  //     setError(e.message);
  //   }
  // };

  return (
    <div className="button">
      <h1>
        <span
          className={type === 'sign-in' ? style.active : ''}
          onClick={() => setType('sign-in')}
        >
          Sign In
        </span>
        <span
          className={type === 'sign-up' ? style.active : ''}
          onClick={() => setType('sign-up')}
        >
          Sign Up
        </span>
        {error && <p>{error}</p>}
        <form className="auth" onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              placeholder="user email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="password"
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>Enter</button>
        </form>
      </h1>
    </div>
  );
}
