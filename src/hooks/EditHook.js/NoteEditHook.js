import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { editNote, fetchOneNote } from '../../services/FetchNotes';

export default function NoteEditHook() {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const grabNote = async () => {
      const data = await fetchOneNote(id);
      setNote(data);
      setTitle(data);
    };
    grabNote();
  }, [id]);

  const submitChange = async () => {
    try {
      await editNote(id, note, title);
      history.push(`/${id}`);
    } catch {
      alert('Oh no! Something went wrong.');
    }
  };
  return { id, note, title, setTitle, setNote, submitChange };
}
