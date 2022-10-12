import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component test', () => {
  test('renders posts if succeeded', async () => {
    window.fetch = vitest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First Post' }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
