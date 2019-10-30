import reducer from '../';

describe('index', () => {
  it('should execute the "mark space" reducer', () => {
    let state;
    let action;

    state = {
      turns: [
        { player: 1, position: 1, },
      ],
    };
    action = { type: 'MARK_SPACE', payload: { position: 2, }, };

    expect(reducer(state, action)).toStrictEqual({
      turns: [
        { player: 1, position: 1, },
        { player: 2, position: 2, },
      ],
    });
  });

  it('should execute the "reset" reducer', () => {
    let state;
    let action;

    state = {
      turns: [
        { player: 1, position: 1, },
      ],
    };
    action = { type: 'RESET', };

    expect(reducer(state, action)).toStrictEqual({
      turns: [],
    });
  });

  it('should return the current state for unknown actions', () => {
    let state;
    let action;

    state = {
      turns: [
        { player: 1, position: 1, },
      ],
    };
    action = { type: 'FOO_BAR', };

    expect(reducer(state, action)).toStrictEqual({
      turns: [
        { player: 1, position: 1, },
      ],
    });
  });
});
