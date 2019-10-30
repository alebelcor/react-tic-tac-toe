import reducer from '../markSpace';
import getNextPlayer from '../../selectors/getNextPlayer';

jest.mock('../../selectors/getNextPlayer');

describe('markSpace', () => {
  it('should append a position object to the state', () => {
    getNextPlayer.mockImplementation(() => {
      return 1;
    });

    let state;

    state = {
      turns: [],
    };
    expect(reducer(state, 1)).toStrictEqual({
      turns: [
        { player: 1, position: 1 },
      ],
    });

    getNextPlayer.mockImplementation(() => {
      return 2;
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
