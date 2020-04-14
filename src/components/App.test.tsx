import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders top navigation', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/browse course/i);
  expect(linkElement).toBeInTheDocument();
});
