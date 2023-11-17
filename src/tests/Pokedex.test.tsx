import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se a página contém um heading h2 com o texto Encountered Pokémon: ', () => {
  renderWithRouter(<App />);
  const h2Element = screen.getByRole('heading', { level: 2 });
  expect(h2Element).toHaveTextContent('Encountered Pokémon');
});

test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado: ', async () => {
  renderWithRouter(<App />);
  const botao = screen.getByRole('button', { name: 'Próximo Pokémon' });
  await userEvent.click(botao);
  const name = screen.getByText('Charmander');
  expect(name).toBe('Charmander');
});
// test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado: ', async () => {
//   renderWithRouter(<App />);
//   const botao = screen.getByRole('button', { name: 'Próximo Pokémon' });
//   await userEvent.click(botao);
//   expect('Charmander').toBeInTheDocument();
//   await userEvent.click(botao);
//   expect('Caterpie').toBeInTheDocument();
//   await userEvent.click(botao);
//   expect('Ekans').toBeInTheDocument();
//   await userEvent.click(botao);
//   expect('Alakazam').toBeInTheDocument();
//   await userEvent.click(botao);
//   expect('Mew').toBeInTheDocument();
//   await userEvent.click(botao);
//   expect('Rapidash').toBeInTheDocument();
//   await userEvent.click(botao);
//   expect('Snorlax').toBeInTheDocument();
//   await userEvent.click(botao);
//   expect('Dragonair ').toBeInTheDocument();
//   await userEvent.click(botao);
//   expect('Pikachu').toBeInTheDocument();
// });
