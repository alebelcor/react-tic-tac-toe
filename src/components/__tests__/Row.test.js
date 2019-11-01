import React from 'react';
import { render } from '@testing-library/react';

import Row from '../Row';

jest.mock('../Space', () => {
  return jest.fn(() => {
    return <div>&lt;Space /&gt; mock</div>
  });
});

describe('Row', () => {
  it('should render the amount of <Space/>s sent as `positions`', () => {
    const { getAllByText } = render(<Row positions={[1, 2, 3]} />);
    expect(getAllByText('<Space /> mock')).toHaveLength(3);
  });
});
