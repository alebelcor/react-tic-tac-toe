import getNextPlayer from '../selectors/getNextPlayer';

export default (state, position) => {
  return {
    turns: [
      ...state.turns,

      {
        player: getNextPlayer(state),
        position,
      },
    ],
  };
};
