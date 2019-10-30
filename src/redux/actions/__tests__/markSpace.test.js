import actionCreator from '../markSpace';

describe('markSpace', () => {
  it('should be a function', () => {
    expect(typeof actionCreator).toBe('function');
  });

  it('should return an action in a specific shape', () => {
    const position = 'foo';
    const action = actionCreator(position);
    expect(action).toStrictEqual({
      type: 'MARK_SPACE',
      payload: {
        position,
      }
    });
  });
});
