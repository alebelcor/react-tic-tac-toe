import actionCreator from '../reset';

describe('reset', () => {
  it('should be a function', () => {
    expect(typeof actionCreator).toBe('function');
  });

  it('should return an action in a specific shape', () => {
    const action = actionCreator();
    expect(action).toStrictEqual({
      type: 'RESET',
    });
  });
});
