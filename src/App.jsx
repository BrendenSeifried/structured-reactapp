import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoteDetails from './views/NoteDetails';
import NoteList from './views/NoteList';
import NewNotePage from './views/NewNotePage';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path="/new">
          <NewNotePage />
        </Route>
        <Route path="/:id">
          <NoteDetails />
        </Route>
        <Route path="/">
          <NoteList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
