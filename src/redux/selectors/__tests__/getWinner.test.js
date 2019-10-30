import selector from '../getWinner';

describe('getWinner', () => {
  it('should return null when no winning combination', () => {
    let state;

    state = { turns: [] };
    expect(selector(state)).toBeNull();
  });

  it('should return the winning player', () => {
    let state;

    state = {
      turns: [
        { player: 2, position: 1, },
        { player: 2, position: 4, },
        { player: 2, position: 7, },
      ],
    };
    expect(selector(state)).toBe(2);

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
  });
});
