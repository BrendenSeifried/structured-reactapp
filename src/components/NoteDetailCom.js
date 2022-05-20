import React from 'react';
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import Edit from '../components/Edit';
import { useUserContext } from '../context/UserContext';
import { UserHook } from '../hooks/FetchList/Detail/NoteFetchHook';
import Clone from '../hooks/Clone/Clone';
import CloneCom from './CloneCom/CloneCom';
let sameId = 0;

export default function NoteDetailCom() {
  const { id } = useParams();
  const { note, loading, clone } = UserHook(id);
  const { currentUser } = useUserContext();
  const history = useHistory();
  // const { cloneChange } = Clone();
  if (currentUser.id === note.users_id) {
    sameId = 1;
  } else {
    sameId = 0;
  }

  const handleClone = async (data) => {
    await clone(data);
    history.push('/');
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div>
        <h1>{note.title}</h1>
        <h3>{note.note}</h3>
        <p>{note.created_at}</p>

        {sameId === 1 ? (
          <Link to={`/${id}/edit`}>Edit</Link>
        ) : (
          <Link to={`/${id}/clone`}>Clone</Link>
        )}
      </div>
      {sameId === 1 ? (
        <Route path={`/:id/edit`}>
          <Edit id={id} />
        </Route>
      ) : (
        <Route path={`/:id/clone`}>
          <CloneCom note={note} handleClone={handleClone} />
        </Route>
      )}
    </>
  );
}
