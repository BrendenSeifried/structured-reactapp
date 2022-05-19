import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoteDetails from './views/NoteDetails';
import NoteList from './views/NoteList';
import NewNotePage from './views/NewNotePage';
import { UserProvider } from './context/UserContext';
import { PrivateRoute } from './components/PrivateRoute.jsx/PrivateRoute';
import Header from './components/Header';
import Login from './views/Auth/Login';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute path="/auth">
            <Login />
          </PrivateRoute>
          <Route path="/new">
            <NewNotePage />
          </Route>
          <PrivateRoute path="/:id">
            <NoteDetails />
          </PrivateRoute>
          <Route path="/">
            <NoteList />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
