import React from 'react';
import UserHook from '../hooks/UserHook';

export default function NoteDetails() {
  const { note, loading } = UserHook();

  if (loading) return <h1>Loading</h1>;
    
  return (
    <div>
      <h1>{note.title}</h1>
    </div>
  );
}
