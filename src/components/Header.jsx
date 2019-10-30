/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useSelector } from 'react-redux';

import getWinner from '../redux/selectors/getWinner';
import getIsGameOver from '../redux/selectors/getIsGameOver';

import {
  headerStyle,
  headingTextStyle,
  headingTextAlternativeStyle,
} from '../styles/Header.css';

const Header = () => {
  const isGameOver = useSelector(getIsGameOver);
  const winner = useSelector(getWinner);

  let headingText = 'Click to play';
  if (isGameOver) {
    if (winner === null) {
      headingText = 'Draw. Click to play again';
    } else {
      headingText = `Player ${winner} wins. Click to play again`
    }
  }

  const headingStyle = css`
    ${winner === 2 ? headingTextAlternativeStyle : headingTextStyle};
  `;

  return (
    <header css={headerStyle}>
      <h1>Tic Tac Toe</h1>

      <h2 css={headingStyle}>
        {headingText}
      </h2>
    </header>
  );
};

export default Header;
