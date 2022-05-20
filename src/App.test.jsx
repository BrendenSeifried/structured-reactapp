import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { NoteProvider } from './context/NoteContext';
import { UserProvider } from './context/UserContext';

describe('example test', () => {
  it('first test', async () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <AuthProvider>
            <NoteProvider>
              <App />
            </NoteProvider>
          </AuthProvider>
        </UserProvider>
      </BrowserRouter>
    );
    const one = screen.getByText('The big list of notes');
    expect(one).toBeInTheDocument();
  });
});
