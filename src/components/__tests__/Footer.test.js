import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../Footer';

describe('Footer', () => {
  it('should render a "star on github" button', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('star-on-github')).toBeVisible();
  });
});
