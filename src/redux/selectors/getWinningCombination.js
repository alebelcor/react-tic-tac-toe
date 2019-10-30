import { createSelector } from 'reselect';

const getWinningCombination = (positionOne, positionTwo, positionThree, markedSpaces) => {
  const hasPositionTwo = markedSpaces.includes(positionTwo);
  const hasPositionThree = markedSpaces.includes(positionThree);

  if (hasPositionTwo && hasPositionThree) {
    return [
      positionOne,
      positionTwo,
      positionThree
    ];
  }

  return null;
};

const getPlayerWinningCombination = (markedSpaces) => {
  for (let i = 0; i < markedSpaces.length; i += 1) {
    let position = markedSpaces[i];

    // horizontal win
    if (position === 1 || position === 4 || position === 7) {
      const winningCombination = getWinningCombination(position, position + 1, position + 2, markedSpaces);

      if (winningCombination) {
        return winningCombination;
      }
    }

    // vertical win
    if (position === 1 || position === 2 || position === 3) {
      const winningCombination = getWinningCombination(position, position + 3, position + 6, markedSpaces);

      if (winningCombination) {
        return winningCombination;
      }
    }

    // diagonal (top left to bottom right) win
    if (position === 1) {
      const winningCombination = getWinningCombination(position, 5, 9, markedSpaces);

      if (winningCombination) {
        return winningCombination;
      }
    }

    // diagonal (bottom left to top right) win
    if (position === 3) {
      const winningCombination = getWinningCombination(position, 5, 7, markedSpaces);

      if (winningCombination) {
        return winningCombination;
      }
    }
  }

  return null;
};

const getPlayerOneMarkedSpaces = state => state.turns
  .filter(turn => turn.player === 1)
  .map(turn => turn.position)
  .sort();

const getPlayerTwoMarkedSpaces = state => state.turns
  .filter(turn => turn.player === 2)
  .map(turn => turn.position)
  .sort();

export default createSelector(
  getPlayerOneMarkedSpaces,
  getPlayerTwoMarkedSpaces,
  (playerOneMarkedSpaces, playerTwoMarkedSpaces) => {
    const playerOneWinningCombination = getPlayerWinningCombination(playerOneMarkedSpaces);
    if (playerOneWinningCombination) {
      return playerOneWinningCombination;
    }

    const playerTwoWinningCombination = getPlayerWinningCombination(playerTwoMarkedSpaces);
    if (playerTwoWinningCombination) {
      return playerTwoWinningCombination;
    }

    return null;
  }
);
