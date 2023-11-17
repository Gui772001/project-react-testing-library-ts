import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

test('Teste se a página contém as informações sobre a Pokédex. ', () => {
  renderWithRouter(<About />);
  const Claassname = screen.getByText('About Pokédex');
  expect(Claassname).toBeInTheDocument();
});
test('Teste se a página contém um heading h2 com o texto About Pokédex ', () => {
  renderWithRouter(<About />);
  const h2Element = screen.getByRole('heading', { level: 2 });
  expect(h2Element).toHaveTextContent('About Pokédex');
});
test('Teste se a página contém a seguinte imagem de uma Pokédex: ', () => {
  renderWithRouter(<About />);
  const imagemPokedex = screen.getByRole('img', { name: 'Pokédex' });
  expect(imagemPokedex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
test('Teste se a página contém dois parágrafos com texto sobre a Pokédex. ', () => {
  renderWithRouter(<About />);
  const PARAGRAFO1 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon.');
  const PARAGRAFO2 = screen.getByText('One can filter Pokémon by type, and see more details for each one of them.');
  expect(PARAGRAFO1).toBeInTheDocument();
  expect(PARAGRAFO2).toBeInTheDocument();
});
