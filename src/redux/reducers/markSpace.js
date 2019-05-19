export default (state, position) => {
  if (state.turns.length === 0) {
    return {
      ...state,
      turns: [{
        player: 1,
        position
      }]
    };
  }

  const isMarked = state.turns.some(turn => turn.position === position);
  if (isMarked) {
    return state;
  }

  const newState = {
    ...state,
    turns: [
      ...state.turns,
      {
        player: state.turns[state.turns.length - 1].player === 1 ? 2 : 1,
        position
      }
    ]
  };

  return newState;
};
