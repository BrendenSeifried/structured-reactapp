import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoteList from './views/ListView/NoteList';
import { UserProvider } from './context/UserContext';
import { PrivateRoute } from './components/PrivateRoute.jsx/PrivateRoute';
import Login from './views/Auth/Login';
import { AuthProvider } from './context/AuthContext';
import { NoteProvider } from './context/NoteContext';
import ClonePage from './views/ClonePage/ClonePage';
import NewNotePage from './views/AddPage/NewNotePage';
import Header from './components/Header/Header';
import NoteDetails from './views/DetailView/NoteDetails';
import styles from './App.css';
export default function App() {
  return (
    <div className={styles.background}>
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
          <NoteProvider >
            <Header />
            <Switch>
              <Route path=":id/clone">
                <ClonePage />
              </Route>
              <Route path="/auth">
                <Login />
              </Route>
              <PrivateRoute path="/new">
                <NewNotePage />
              </PrivateRoute>
              <PrivateRoute path="/:id">
                <NoteDetails />
              </PrivateRoute>
              <Route path="/">
                <NoteList />
              </Route>
            </Switch>
          </NoteProvider>
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
    </div>
  );
}
