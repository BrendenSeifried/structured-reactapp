import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import Edit from '../components/Edit';
import { useUserContext } from '../context/UserContext';
import { UserHook } from '../hooks/FetchList/Detail/NoteFetchHook';
import Clone from '../hooks/Clone/Clone';
let sameId = 0;

export default function NoteDetailCom() {
  const [note, loading] = UserHook();
  const { id } = useParams();
  const { currentUser } = useUserContext();
  const { cloneChange } = Clone();
  if (currentUser.id === note.users_id) {
    sameId = 1;
  } else {
    sameId = 0;
  }

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div>
        <h1>{note.title}</h1>
        <h3>{note.note}</h3>
        <p>{note.created_at}</p>

        {sameId === 1 ? <Link to={`/${id}/edit`}>Edit</Link> : ''}
      </div>
      {sameId === 1 ? (
        <Route path={`/:id/edit`}>
          <Edit id={id} />
        </Route>
      ) : (
        <button onClick={cloneChange(id)}>Clone</button>
      )}
    </>
  );
}
