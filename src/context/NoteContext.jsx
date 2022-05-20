import { createContext, useContext, useReducer, useState } from 'react';
import { useTestFetch } from '../hooks/FetchList/Detail/NoteFetchHook';
// import { getUser } from '../services/fetchauth';
// import { getUser } from '../services/fetch';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LIST':
      return action.payload;
    case 'ADD':
      return action.payload;

    case 'EDIT':
      return action.payload;
    default:
      throw new Error(`Action type ${action.type} is not supported`);
  }
};

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [allNotes, dispatch] = useReducer(reducer);
  const [data, setData] = useState([]);

  return (
    <NoteContext.Provider value={{ allNotes, dispatch, data, setData }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNoteContext = () => {
  const data = useContext(NoteContext);
  if (data === undefined) {
    throw new Error('somethings wrong with User context.');
  }
  return data;
};

export { NoteProvider, useNoteContext };
