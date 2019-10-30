import selector from '../getIsGameOver';

import getWinningCombination from '../getWinningCombination';

jest.mock('../getWinningCombination');

describe('getIsGameOver', () => {
  it('should return true when there is a winning combination', () => {
    getWinningCombination.mockImplementation(() => {
      return [1, 2, 3];
    });

    let state = { turns: [] };

    expect(selector(state)).toBe(true);
    expect(getWinningCombination).toHaveBeenCalled();
    expect(getWinningCombination).toHaveBeenCalledWith(state);
  });

  it('should return true when 9 turns have been taken', () => {
    getWinningCombination.mockImplementation(() => {
      return null;
    });

    let state = {
      turns: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    };

    expect(selector(state)).toBe(true);
    expect(getWinningCombination).toHaveBeenCalled();
    expect(getWinningCombination).toHaveBeenCalledWith(state);
  });

  it('should return false otherwise', () => {
    getWinningCombination.mockImplementation(() => {
      return null;
    });

    let state = {
      turns: [
        { player: 1, position: 1, },
        { player: 2, position: 2, },
        { player: 1, position: 3, },
      ],
    };

    expect(selector(state)).toBe(false);
    expect(getWinningCombination).toHaveBeenCalled();
    expect(getWinningCombination).toHaveBeenCalledWith(state);
  });
});
