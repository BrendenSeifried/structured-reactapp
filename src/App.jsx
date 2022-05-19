import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoteDetails from './views/NoteDetails';
import NoteList from './views/NoteList';
import NewNotePage from './views/NewNotePage';
import { UserProvider } from './context/UserContext';
import { PrivateRoute } from './components/PrivateRoute.jsx/PrivateRoute';
import Header from './components/Header';
import Auth from './views/Auth/Auth';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Switch>
          <Route path="/auth">
            <Auth />
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
      </UserProvider>
    </BrowserRouter>
  );
}
