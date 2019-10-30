import reducer from '../markSpace';

describe('markSpace', () => {
  it('should append a position object to the state', () => {
    let state;

    state = {
      turns: [],
    };
    expect(reducer(state, 1)).toStrictEqual({
      turns: [
        { player: 1, position: 1 },
      ],
    });

    state = {
      turns: [
        { player: 1, position: 1 },
      ],
    };
    expect(reducer(state, 2)).toStrictEqual({
      turns: [
        { player: 1, position: 1 },
        { player: 2, position: 2 },
      ],
    });
  });
});
