import { createSelector } from 'reselect';

import getWinningCombination from './getWinningCombination';

const getTurns = state => state.turns;

export default createSelector(
  [getWinningCombination, getTurns],
  (winningCombination, turns) => {
    if (winningCombination === null) {
      return null;
    }

    const firstMoveInWinningCombination = parseInt(winningCombination[0], 10);
    const winningCombinationFirstTurnIndex = turns.findIndex(turn => turn.position === firstMoveInWinningCombination);

    return turns[winningCombinationFirstTurnIndex].player;
  }
);
