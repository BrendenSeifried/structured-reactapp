// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTestFetch from '../hooks/NoteFetchHook';

export default function ShowNotes() {
  const { note, loading } = useTestFetch();
  // const {test, loading} = useTestFetch();

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div>
        {note.map((item) => (
          <div key={item.id}>
            <Link to={`/${item.id}`}>
              <h1>{item.note}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
