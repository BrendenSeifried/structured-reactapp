import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { fetchNotes } from '../services/FetchNotes';

function useTestFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const renderNotes = async () => {
      const data = await fetchNotes();
      setData(data);
      setLoading(false);
    };
    renderNotes();
  }, []);

  return [data, loading];
}

export default useTestFetch;

// function useTestFetch() {
//     const [value, setValue] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const {id } = useParams();
//     useEffect(() => {
//       const renderNotes = async () => {
//         const data = await fetch(id);
//         setValue(data);
//         setLoading(false);
//       };
//       renderNotes();
//     }, []);

//     return [ value, loading, fetch ];
//   }

//   export default useTestFetch;
