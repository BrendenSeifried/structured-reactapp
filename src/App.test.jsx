import { render } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { NoteProvider } from './context/NoteContext';
import { UserProvider } from './context/UserContext';

describe('example test', () => {
  it('first test', async () => {
    render(<App />);
  });
});
