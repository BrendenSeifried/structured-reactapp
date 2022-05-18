import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import Edit from '../components/Edit';
import { UserHook } from '../hooks/FetchList/Detail/NoteFetchHook';

export default function NoteDetails() {
  const [note, loading] = UserHook();
  const { id } = useParams();

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div>
        <h1>{note.title}</h1>
        <h3>{note.note}</h3>
        <p>{note.created_at}</p>
        <p>{note.creator}</p>
        <Link to={`/${id}/edit`}>Edit</Link>
      </div>

      <Route path={`/${id}/edit`}>
        <Edit id={id} />
      </Route>
    </>
  );
}
