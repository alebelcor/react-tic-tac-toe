import selector from '../getIsGameOver';

describe('getIsGameOver', () => {
  it('should return true when there is a winning combination', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 1, position: 2, },
        { player: 1, position: 3, },
      ],
    };
    expect(selector(state)).toBe(true);
  });

  it('should return true when 9 turns have been taken', () => {
    let state;

    state = {
      turns: [
        { },
        { },
        { },
        { },
        { },
        { },
        { },
        { },
        { },
      ],
    };
    expect(selector(state)).toBe(true);
  });

  it('should return false otherwise', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 2, position: 2, },
        { player: 1, position: 3, },
      ],
    };
    expect(selector(state)).toBe(false);
  });

});
