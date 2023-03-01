import React from 'react';
import { render } from '@testing-library/react';
import EventList from '../EventList';

describe('EventList', () => {
  it('should render correctly', () => {
    const { container } = render(<EventList />);
    expect(container).toMatchSnapshot();
  });
}
);