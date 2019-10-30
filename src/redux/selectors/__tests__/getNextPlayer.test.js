import selector from '../getNextPlayer';

describe('getNextPlayer', () => {
  it('should return 1 when no turns have been taken', () => {
    let state;

    state = {
      turns: [],
    }
    expect(selector(state)).toBe(1);
  });

  it('should return 1 when the last player was player 2', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 2, position: 2, },
      ],
    }
    expect(selector(state)).toBe(1);
  });

  it('should return 2 when the last player was player 1', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 2, position: 2, },
        { player: 1, position: 3, },
      ],
    }
    expect(selector(state)).toBe(2);
  });
});
