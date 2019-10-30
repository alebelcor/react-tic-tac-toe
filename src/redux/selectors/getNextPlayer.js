import { createSelector } from 'reselect';

const getTurns = state => state.turns;

export default createSelector(
  getTurns,
  turns => {
    const numberOfTurns = turns.length;
    if (numberOfTurns === 0) {
      return 1;
    }

    const lastPlayer = turns[numberOfTurns - 1].player;
    if (lastPlayer === 1) {
      return 2;
    }

    return 1;
  }
);
