import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import Edit from '../components/Edit';
import { useUserContext } from '../context/UserContext';
import { UserHook } from '../hooks/FetchList/Detail/NoteFetchHook';

export default function NoteDetailCom() {
  const [note, loading] = UserHook();
  const { id } = useParams();
  const { currentUser } = useUserContext();

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div>
        <h1>{note.title}</h1>
        <h3>{note.note}</h3>
        <p>{note.created_at}</p>

        {/* for checking the current user and creator user id */}
        <p>{note.users_id}</p>
        <p>{currentUser.id}</p>
        <Link to={`/${id}/edit`}>Edit</Link>
      </div>

      <Route path={`/:id/edit`}>
        <Edit id={id} />
      </Route>
    </>
  );
}
