import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
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
