import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Stations from './Stations';

test('renders a station', () => {
  const stations = [
    {
      id: 6,
      name: 'Anime Radio',
      frequency: 107.5,
    },
  ];

  const component = render(<Stations stations={stations} />);

  expect(component.container).toHaveTextContent('Anime Radio');
});

test('clicking the button calls event handler once', () => {
  const stations = [
    {
      id: 6,
      name: 'Anime Radio',
      frequency: 107.5,
      logo: '',
    },
  ];

  const mockHandler = jest.fn();

  const component = render(
    <Stations stations={stations} toggle={mockHandler} />
  );

  const button = component.getByText('Anime Radio');
  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);

  const element = component.getByText('currently playing');
  expect(element).toBeInTheDocument();
});
