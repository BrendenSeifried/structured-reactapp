import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoteDetails from './views/NoteDetails';
import NoteList from './views/NoteList';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
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
