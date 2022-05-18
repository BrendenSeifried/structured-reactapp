import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoteList from './views/NoteList';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path="/">
          <NoteList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
