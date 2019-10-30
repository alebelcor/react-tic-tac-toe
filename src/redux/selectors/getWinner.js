import { createSelector } from 'reselect';

import getWinningCombination from './getWinningCombination';

const getTurns = state => state.turns;

export default createSelector(
  getWinningCombination,
  getTurns,
  (winningCombination, turns) => {
    if (winningCombination === null) {
      return null;
    }

    return turns
      .find(turn => turn.position === winningCombination[0])
      .player;
  }
);
