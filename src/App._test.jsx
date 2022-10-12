import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  test('should show learn react', () => {
    render(<App />);

    expect(screen.getByText(/learn react/i)).toBeDefined();
  });
});
