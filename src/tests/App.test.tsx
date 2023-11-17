import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se os links rediricionam para o home', async () => {
  renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: 'Home' });
  await userEvent.click(homeLink);
  const { pathname } = window.location;
  expect(pathname).toBe('/');
});
test('Teste se os links rediricionam para o  about ', async () => {
  renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'About' });
  await userEvent.click(aboutLink);
  const { pathname } = window.location;
  expect(pathname).toBe('/about');
});

test('Teste se os links rediricionam para o  Favorite pokeman ', async () => {
  renderWithRouter(<App />);
  const Favoritelink = screen.getByRole('link', { name: 'Favorite Pokémon' });
  await userEvent.click(Favoritelink);
  const { pathname } = window.location;
  expect(pathname).toBe('/favorites');
});
