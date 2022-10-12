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
});
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-bj7ech)
