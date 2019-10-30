import selector from '../getWinningCombination';

describe('getWinningCombination', () => {
  it('should return null when no winning combination', () => {
    let state;

    state = { turns: [] };
    expect(selector(state)).toBeNull();

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 2, position: 2, },
        { player: 1, position: 3, },
        { player: 2, position: 4, },
      ],
    };
    expect(selector(state)).toBeNull();

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 2, position: 4, },
        { player: 1, position: 2, },
        { player: 2, position: 5, },
        { player: 1, position: 6, },
        { player: 2, position: 3, },
        { player: 1, position: 9, },
        { player: 2, position: 8, },
        { player: 1, position: 7, },
      ],
    };
    expect(selector(state)).toBeNull();
  });

  it('should return a horizontal win (123)', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 1, position: 3, },
        { player: 1, position: 2, },
      ],
    };
    expect(selector(state)).toStrictEqual([1, 2, 3]);

    state = {
      turns: [
        { player: 2, position: 1, },
        { player: 2, position: 3, },
        { player: 2, position: 2, },
      ],
    };
    expect(selector(state)).toStrictEqual([1, 2, 3]);
  });

  it('should return a horizontal win (456)', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 4, },
        { player: 1, position: 6, },
        { player: 1, position: 5, },
      ],
    };
    expect(selector(state)).toStrictEqual([4, 5, 6]);

    state = {
      turns: [
        { player: 2, position: 4, },
        { player: 2, position: 6, },
        { player: 2, position: 5, },
      ],
    };
    expect(selector(state)).toStrictEqual([4, 5, 6]);
  });

  it('should return a horizontal win (789)', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 7, },
        { player: 1, position: 9, },
        { player: 1, position: 8, },
      ],
    };
    expect(selector(state)).toStrictEqual([7, 8, 9]);

    state = {
      turns: [
        { player: 2, position: 7, },
        { player: 2, position: 9, },
        { player: 2, position: 8, },
      ],
    };
    expect(selector(state)).toStrictEqual([7, 8, 9]);
  });

  it('should return a vertical win (147)', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 1, },
        { player: 1, position: 7, },
        { player: 1, position: 4, },
      ],
    };
    expect(selector(state)).toStrictEqual([1, 4, 7]);

    state = {
      turns: [
        { player: 2, position: 1, },
        { player: 2, position: 7, },
        { player: 2, position: 4, },
      ],
    };
    expect(selector(state)).toStrictEqual([1, 4, 7]);
  });

  it('should return a vertical win (258)', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 2, },
        { player: 1, position: 8, },
        { player: 1, position: 5, },
      ],
    };
    expect(selector(state)).toStrictEqual([2, 5, 8]);

    state = {
      turns: [
        { player: 2, position: 2, },
        { player: 2, position: 8, },
        { player: 2, position: 5, },
      ],
    };
    expect(selector(state)).toStrictEqual([2, 5, 8]);
  });

  it('should return a vertical win (369)', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 3, },
        { player: 1, position: 9, },
        { player: 1, position: 6, },
      ],
    };
    expect(selector(state)).toStrictEqual([3, 6, 9]);

    state = {
      turns: [
        { player: 2, position: 3, },
        { player: 2, position: 9, },
        { player: 2, position: 6, },
      ],
    };
    expect(selector(state)).toStrictEqual([3, 6, 9]);
  });

  it('should return a diagonal win (159)', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 5, },
        { player: 1, position: 9, },
        { player: 1, position: 1, },
      ],
    };
    expect(selector(state)).toStrictEqual([1, 5, 9]);

    state = {
      turns: [
        { player: 2, position: 5, }, { player: 2, position: 9, }, { player: 2, position: 1, }
      ],
    };
    expect(selector(state)).toStrictEqual([1, 5, 9]);
  });

  it('should return a diagonal win (357)', () => {
    let state;

    state = {
      turns: [
        { player: 1, position: 7, },
        { player: 1, position: 5, },
        { player: 1, position: 3, },
      ],
    };
    expect(selector(state)).toStrictEqual([3, 5, 7]);

    state = {
      turns: [
        { player: 2, position: 3, },
        { player: 2, position: 7, },
        { player: 2, position: 5, },
      ],
    };
    expect(selector(state)).toStrictEqual([3, 5, 7]);
  });
});
