import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// import idObj from 'identity-obj-proxy';

test('renders Header component', () => {
  render(<App />);
  const headerElement = screen.getByText('Stations');
  expect(headerElement).toBeInTheDocument();
});
