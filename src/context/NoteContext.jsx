import { createContext, useContext, useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LIST':
      return action.payload;
    case 'ADD':
      return action.payload;

    case 'EDIT':
      return action.payload;
    case 'CLONE':
      return action.payload;
    default:
      throw new Error(`Action type ${action.type} is not supported`);
  }
};

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [allNotes, dispatch] = useReducer(reducer);

  return (
    <NoteContext.Provider value={{ allNotes, dispatch }}>
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
