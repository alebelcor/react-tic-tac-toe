import React from 'react';
import { render } from '@testing-library/react';

import getWinner from '../../redux/selectors/getWinner';
import getIsGameOver from '../../redux/selectors/getIsGameOver';

import Header from '../Header';

jest.mock('react-redux', () => ({
  useSelector: (selector) => selector()
}));
jest.mock('../../redux/selectors/getWinner');
jest.mock('../../redux/selectors/getIsGameOver');

describe('Header', () => {
  it('should render a main heading', () => {
    getIsGameOver.mockImplementation(() => false);
    getWinner.mockImplementation(() => null);

    const mainHeadingText = 'Tic Tac Toe';
    const { getByText } = render(<Header />);
    expect(getByText(mainHeadingText)).toBeVisible();
  });

  it('should render a welcome message', () => {
    getIsGameOver.mockImplementation(() => false);
    getWinner.mockImplementation(() => null);

    const message = 'Click to play';
    const { getByText } = render(<Header />);
    expect(getByText(message)).toBeVisible();
  });

  it('should render a congratulations message when there is a winner', () => {
    const winner = 1;
    getIsGameOver.mockImplementation(() => true);
    getWinner.mockImplementation(() => winner);

    const message = `Player ${winner} wins. Click to play again`;
    const { getByText } = render(<Header />);
    expect(getByText(message)).toBeVisible();
  });

  it('should render a "draw" message when there is a no winner', () => {
    getIsGameOver.mockImplementation(() => true);
    getWinner.mockImplementation(() => null);

    const message = 'Draw. Click to play again';
    const { getByText } = render(<Header />);
    expect(getByText(message)).toBeVisible();
  });
});
