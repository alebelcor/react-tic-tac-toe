/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment } from 'react';
import { connect } from 'react-redux';

import Row from './Row';

import getIsGameOver from '../redux/selectors/getIsGameOver';
import getWinner from '../redux/selectors/getWinner';
import getWinningCombination from '../redux/selectors/getWinningCombination';

import {
  headerStyle,
  headingTextStyle,
  mainStyle,
  footerStyle,
  getWinnerStyleStroke
} from '../styles/App.css';

const App = ({ isGameOver, winner, winningCombination }) => {
  let headingText = 'Click to play.';

  if (isGameOver) {
    if (winner === null) {
      headingText = 'Draw. Click to play again.';
    } else {
      headingText = `Player ${winner} wins. Click to play again.`
    }
  }

  return (
    <Fragment>
      <header css={headerStyle}>
        <h1>Tic Tac Toe</h1>
        <h2 css={css`
          ${headingTextStyle};
          ${winner === 2 ? `color: #c3423f;` : ``}
        `}>
          {headingText}
        </h2>
      </header>

      <main css={css`
        ${mainStyle};
        ${winningCombination !== null ? getWinnerStyleStroke(winningCombination.join('')) : ``};
      `}>
        <Row positions={[1, 2, 3]} />
        <Row positions={[4, 5, 6]} />
        <Row positions={[7, 8, 9]} />
      </main>

      <footer css={footerStyle}>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=alebelcor&repo=react-tic-tac-toe&type=star&count=false"
          title="Star this repository on GitHub"
          frameBorder="0"
          scrolling="0"
          width="55"
          height="20"
        ></iframe>
      </footer>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isGameOver: getIsGameOver(state),
    winner: getWinner(state),
    winningCombination: getWinningCombination(state),
  }
};

export default connect(
  mapStateToProps,
  null
)(App);
