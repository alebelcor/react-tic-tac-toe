import reducer from '../reset';

describe('reset', () => {
  it('should reset the state', () => {
    expect(reducer()).toStrictEqual({
      turns: [],
    });
  });
});
