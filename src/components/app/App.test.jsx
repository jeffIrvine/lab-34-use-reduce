import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('tests the changing of state for undo, redo, and record', () => {
    render(<App />);
    
    const undoButton = screen.getByText('undo');
    const redoButton = screen.getByText('redo');
    const colorInput = screen.getByTestId('color-input');

    fireEvent.change(colorInput, {
      target: {
        value: '#FFFFFF'
      },
    });

    fireEvent.click(undoButton);
    fireEvent.click(redoButton);

    expect(screen.getByTestId('color-display')).toHaveStyle({
      backgroundColor: '#FFFFFF'
    });
  });
});
