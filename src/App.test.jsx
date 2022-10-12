import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component test', () => {
  test('render Greeting', () => {
    render(<App />);

    expect(screen.getByText(/greeting/i)).toBeDefined();
  });
});
