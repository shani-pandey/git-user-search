import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { test, expect, jest } from '@jest/globals';

test('SearchBar calls onSearch with the correct value', () => {
  const mockOnSearch = jest.fn();
  render(<SearchBar onSearch={mockOnSearch} />);

  // Simulate typing in the input field
  const input = screen.getByPlaceholderText('Enter GitHub username');
  fireEvent.change(input, { target: { value: 'octocat' } });

  // Simulate clicking the search button
  fireEvent.click(screen.getByText('Search'));

  // Check if onSearch was called with the correct value
  expect(mockOnSearch).toHaveBeenCalledWith('octocat');
});
