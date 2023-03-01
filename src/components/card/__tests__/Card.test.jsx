import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  it('should render correctly', () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
  });
}
);