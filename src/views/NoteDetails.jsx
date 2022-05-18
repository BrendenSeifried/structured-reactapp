import React from 'react';
import AddNote from '../components/AddNote';
import UserHook from '../hooks/UserHook';

export default function NoteDetails() {
  const { note, loading } = UserHook();

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div>
        <h1>{note.title}</h1>
        <h3>{note.note}</h3>
        <p>{note.created_at}</p>
        <p>{note.creator}</p>
      </div>

    
    </>
  );
}
