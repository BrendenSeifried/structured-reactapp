// import React, { useEffect } from 'react';
import { useEffect } from 'react';
import { fetchNotes, fetchOneNote, makeNote } from '../../services/FetchNotes';

export default function Clone(id) {


useEffect(() => {
    const grabNote = async () => {
      const data = await fetchOneNote(id);
     console.log(data);
    };
    grabNote();
  }, [id]);

  const cloneChange = async (id) => {
      
    try {
      await makeNote({ title, note });
      alert('Note Cloned!');
      history.push('/');
    } catch (e) {
      alert('Oh no! Note not cloned.');
    }
    
  };
  return { cloneChange }
    
  
}
