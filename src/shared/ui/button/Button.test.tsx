import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Кнопка', () => {
  test('primary button', () => {
    render(<Button>Test</Button>);
    const button = screen.getByText(/Test/i);
    expect(button).toBeInTheDocument();
  });
});
