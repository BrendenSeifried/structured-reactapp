import { useEffect, useState } from 'react';
import { fetchNotes } from '../services/FetchNotes';

function useTestFetch() {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const renderNotes = async () => {
      const data = await fetchNotes();
      setNote(data);
      setLoading(false);
    };
    renderNotes();
  }, []);

  return { note, loading };
}

export default useTestFetch;

// function useTestFetch() {
//     const [X, setX] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       const renderNotes = async () => {
//         const data = await Y();
//         setX(data);
//         setLoading(false);
//       };
//       renderNotes();
//     }, []);

//     return { X, loading, Y };
//   }

//   export default useTestFetch;
//  function dynamicTest() => {
//     const [X, Y] = useState('')
//     return [X, Y]
// };
