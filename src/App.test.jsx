import { render, screen } from '@testing-library/react';
import App from './App';

describe('example test', () => {
  it('first test', async () => {
    render(<App />);
    screen.debug();
  });
});
