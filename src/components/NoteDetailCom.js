import React from 'react';
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import Edit from '../components/Edit/Edit';
import { useUserContext } from '../context/UserContext';
import { UserHook } from '../hooks/FetchList/Detail/NoteFetchHook';
import CloneCom from './CloneCom/CloneCom';

export default function NoteDetailCom() {
  const { id } = useParams();
  const { note, loading, clone } = UserHook(id);
  const { currentUser } = useUserContext();
  const history = useHistory();

  const handleClone = async (data) => {
    await clone(data);
    history.push('/');
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div>
        <p>Note Creator ID:{note.users_id}</p>
        <h1>{note.title}</h1>
        <h3>{note.note}</h3>
        <p>{note.created_at}</p>

        {currentUser.id === note.users_id ? (
          <Link to={`/${id}/edit`}>
            <button>Edit</button>
          </Link>
        ) : (
          <Link to={`/${id}/clone`}>
            <button>Clone</button>
          </Link>
        )}
      </div>
      {currentUser.id === note.users_id ? (
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
