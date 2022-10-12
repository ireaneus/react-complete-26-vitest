# react-complete-26-vitest

## @testing-library/user-event

[https://testing-library.com/docs/user-event/intro]

## @testing-library/react

[https://testing-library.com/docs/react-testing-library/api]

## testing using vitest

[https://vitest.dev/api/#describe]

```js
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component tests', () => {
  test('renders Greetings as a heading', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const headingElement = screen.getByText('Greetings');
    expect(headingElement).toBeDefined();
  });

  test('renders if button was NOT clicked', () => {
    // Arrange
    render(<Greeting />);

    // Assert
    const outputElement = screen.getAllByText('some info', { exact: false });
    expect(outputElement).toBeDefined();
  });

  test('renders if button was clicked', async () => {
    const user = userEvent.setup();

    // Arrange
    render(<Greeting />);

    // Act
    // if button was clicked
    await user.click(screen.getByRole('button'));

    // Assert
    const outputElement = screen.getByText('Changed Text');
    expect(outputElement).toBeDefined();
  });

  test('paragraph does not render "some info"', async () => {
    const user = userEvent.setup();

    // Arrange
    render(<Greeting />);

    // Act
    // if button was clicked
    await user.click(screen.getByRole('button'));

    // Assert
    const outputElement = screen.queryByText('some info', { exact: false });
    expect(outputElement).toBeNull();
  });
});
```

## Mock testing used for fetch

```js
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
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-bj7ech)
