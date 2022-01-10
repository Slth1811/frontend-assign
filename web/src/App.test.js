import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
// import TripList from './trip/TripList';

test('renders React App', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/เที่ยวไหนดี/);
  expect(textElement).toBeInTheDocument();
});

test('Search box', () => {
  render(<App/>);
  const SearchInput = screen.getByPlaceholderText(/หาที่เที่ยวแล้วไปกัน.../);
  expect(SearchInput).toBeInTheDocument();

  fireEvent.change(SearchInput,{ target: {value: 'ภูเขา'}});
  expect(SearchInput.value).toBe('ภูเขา');

});
