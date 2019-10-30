import { createSelector } from 'reselect';

import getWinningCombination from './getWinningCombination';

const getHasNoMoreTurns = state => state.turns.length === 9;

export default createSelector(
  getWinningCombination,
  getHasNoMoreTurns,
  (winningCombination, hasNoMoreTurns) => {
    return winningCombination !== null || hasNoMoreTurns;
  }
);
