import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Row from './Row';
import getIsGameOver from '../redux/selectors/getIsGameOver';
import getWinner from '../redux/selectors/getWinner';
import getWinningCombination from '../redux/selectors/getWinningCombination';

import './App.css';

const App = ({ isGameOver, winner, winningCombination }) => {
  let headingText = 'Click to play.';

  if (isGameOver) {
    if (winner === null) {
      headingText = 'Draw. Click to play again.';
    } else {
      headingText = `Player ${winner} wins. Click to play again.`
    }
  }

  const headingTextClass = classNames({
    'heading-text': true,
    'winner-2': winner === 2,
  });

  const winnerStreakClass = winningCombination === null ?
    `main` :
    `main w${winningCombination.join('')}`

  return (
    <Fragment>
      <header className="header">
        <h1>Tic Tac Toe</h1>
        <h2 className={headingTextClass}>
          {headingText}
        </h2>
      </header>

      <main className={winnerStreakClass}>
        <Row positions={[1, 2, 3]} />
        <Row positions={[4, 5, 6]} />
        <Row positions={[7, 8, 9]} />
      </main>

      <footer className="footer">
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
