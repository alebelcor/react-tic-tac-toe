import reducer from '../';

import markSpace from '../markSpace';
import reset from '../reset';

jest.mock('../markSpace')
jest.mock('../reset')

describe('index', () => {
  it('should execute the "mark space" reducer', () => {
    markSpace.mockImplementation(() => {
      return {
        turns: [
          { player: 1, position: 1, },
          { player: 2, position: 2, },
        ],
      };
    });

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
    expect(markSpace).toHaveBeenCalled();
    expect(markSpace).toHaveBeenCalledWith(state, action.payload.position);
  });

  it('should execute the "reset" reducer', () => {
    reset.mockImplementation(() => {
      return {
        turns: [],
      };
    });

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
    expect(reset).toHaveBeenCalled();
    expect(reset).toHaveBeenCalledWith();
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
