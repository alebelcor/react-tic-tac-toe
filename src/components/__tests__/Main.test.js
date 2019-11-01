import React from 'react';
import { render } from '@testing-library/react';

import getWinningCombination from '../../redux/selectors/getWinningCombination';

import Main from '../Main';

jest.mock('react-redux', () => ({
  useSelector: selector => selector()
}));
jest.mock('../../redux/selectors/getWinningCombination');
jest.mock('../Row', () => {
  return jest.fn(() => {
    return <div>&lt;Row /&gt; mock</div>
  });
})

describe('Main', () => {
  it('should render 3 rows of spaces', () => {
    getWinningCombination.mockImplementation(() => null);

    const { getAllByText } = render(<Main />);
    expect(getAllByText('<Row /> mock')).toHaveLength(3);
  });
});
