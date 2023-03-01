import React from 'react';
import { render } from '@testing-library/react';
import CardDetails from '../CardDetails';

describe('CardDetails', () => {
  it('should render correctly', () => {
    const { container } = render(<CardDetails />);
    expect(container).toMatchSnapshot();
  });
}
);