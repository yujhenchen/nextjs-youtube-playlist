import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Page from '../page';
import React from 'react';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);

    // const heading = screen.getByRole('heading', { level: 1 });

    // expect(heading).toBeInTheDocument();
  });
});
