import { createSelector } from 'reselect';

const getMarkedBy = () => createSelector(
  state => state.turns,
  (state, position) => position,
  (turns, position) => {
    let markedBy = 0;

    turns.some(turn => {
      if (turn.position === position) {
        markedBy = turn.player;
        return true;
      }

      return false;
    });

    return markedBy;
  }
);

export default getMarkedBy;
