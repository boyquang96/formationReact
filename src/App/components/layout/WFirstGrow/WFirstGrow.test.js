import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WFirstGrow from './WFirstGrow';

describe('<WFirstGrow />', () => {
  test('it should mount', () => {
    render(<WFirstGrow />);
    
    const wFirstGrow = screen.getByTestId('WFirstGrow');

    expect(wFirstGrow).toBeInTheDocument();
  });
});