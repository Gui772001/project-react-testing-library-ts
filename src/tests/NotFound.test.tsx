import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

test('Teste se a página contém um heading h2 com o texto Page requested not found: ', () => {
  renderWithRouter(<NotFound />);
  const h2Element = screen.getByRole('heading', { level: 2 });
  expect(h2Element).toHaveTextContent('Page requested not found');
});
test('Teste se a página mostra a imagem com o texto alternativo: ', () => {
  renderWithRouter(<NotFound />);
  const imagem = screen.getByRole('img');
  expect(imagem).toHaveAttribute('alt', 'Clefairy pushing buttons randomly with text I have no idea what i\'m doing');
});
