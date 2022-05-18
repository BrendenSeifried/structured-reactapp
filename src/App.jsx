import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import { PrivateRoute } from './components/PrivateRoute';

// import Auth from './views/Auth/Auth';
import NoteList from './views/NoteList';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        {/* <Route path="/auth"> */}
        {/* <Auth /> */}
        {/* </Route> */}
        {/* <PrivateRoute path="/">
          <NoteList />
        </PrivateRoute> */}
        <Route path="/">
          <NoteList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
