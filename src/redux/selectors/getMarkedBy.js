import { createSelector } from 'reselect';

const getTurns = state => state.turns;
const getPosition = (state, position) => position;

export default () => createSelector(
  getTurns,
  getPosition,
  (turns, position) => {
    let turn = turns.find(turn => turn.position === position);
    return (turn && turn.player) || null;
  }
);
