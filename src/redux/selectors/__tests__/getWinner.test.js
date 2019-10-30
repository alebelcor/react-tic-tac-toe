import selector from '../getWinner';

import getWinningCombination from '../getWinningCombination';

jest.mock('../getWinningCombination');

describe('getWinner', () => {
  it('should return null when no winning combination', () => {
    getWinningCombination.mockImplementation(() => {
      return null;
    });

    let state = { turns: [] };

    expect(selector(state)).toBeNull();
    expect(getWinningCombination).toHaveBeenCalled();
    expect(getWinningCombination).toHaveBeenCalledWith(state);
  });

  it('should return the winning player', () => {
    getWinningCombination.mockImplementation(() => {
      return [1, 4, 7];
    });

    let state;

    state = {
      turns: [
        { player: 2, position: 1, },
        { player: 2, position: 4, },
        { player: 2, position: 7, },
      ],
    };

    expect(selector(state)).toBe(2);
    expect(getWinningCombination).toHaveBeenCalled();
    expect(getWinningCombination).toHaveBeenCalledWith(state);

    getWinningCombination.mockImplementation(() => {
      return [1, 2, 3];
    });

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 2, position: 4, },
        { player: 1, position: 2, },
        { player: 2, position: 5, },
        { player: 1, position: 3, },
      ],
    };

    expect(selector(state)).toBe(1);
    expect(getWinningCombination).toHaveBeenCalled();
    expect(getWinningCombination).toHaveBeenCalledWith(state);
  });
});
