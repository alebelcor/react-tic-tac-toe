import createSelector from '../getMarkedBy';

describe('getMarkedBy', () => {
  it('should return null when position is not taken', () => {
    let state;
    let position;
    let selector = createSelector();

    state = { turns: [], };
    position = 1;
    expect(selector(state, position)).toBeNull();

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 2, position: 2, },
      ],
    };
    position = 3;
    expect(selector(state, position)).toBeNull();
  });

  it('should return the player that has taken the position', () => {
    let state;
    let position;
    let selector = createSelector();

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 2, position: 2, },
      ],
    };
    position = 2;
    expect(selector(state, position)).toBe(2);
    position = 1;
    expect(selector(state, position)).toBe(1);
  });
});
