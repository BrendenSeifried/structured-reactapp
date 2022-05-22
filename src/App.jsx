import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoteDetails from './views/NoteDetails';
import NoteList from './views/NoteList';
import { UserProvider } from './context/UserContext';
import { PrivateRoute } from './components/PrivateRoute.jsx/PrivateRoute';
import Login from './views/Auth/Login';
import { AuthProvider } from './context/AuthContext';
import { NoteProvider } from './context/NoteContext';
import ClonePage from './views/Auth/ClonePage';
import NewNotePage from './views/NewNotePage';
import Header from './components/Header/Header';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
          <NoteProvider>
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
  );
}
