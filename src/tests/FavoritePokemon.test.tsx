import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';

test('É exibida na tela a mensagem No favorite pokemon found caso a pessoa não tenha Pokémon favorito. ', async () => {
  renderWithRouter(<FavoritePokemon />);
  const mensagem = screen.getByText('No favorite Pokémon found');
  expect(mensagem).toBeInTheDocument();
});
test('Apenas são exibidos os Pokémon favoritados. ', async () => {
  renderWithRouter(<App />);
  const Clic = screen.getByRole('link', { name: 'More details' });
  await userEvent.click(Clic);
  const Cheque = screen.getByRole('checkbox', { checked: false });
  await userEvent.click(Cheque);
  expect(Cheque).toBeInTheDocument();
  const name = screen.getByText('Pikachu');
  expect(name).toBeInTheDocument();
  const Clickando = screen.getByRole('link', { name: 'Favorite Pokémon' });
  await userEvent.click(Clickando);
  const name2 = screen.getByText('Pikachu');
  expect(name2).toBeInTheDocument();
});
