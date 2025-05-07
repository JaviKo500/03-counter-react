import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
import React from 'react';

describe('CounterApp.test', () => {
  const initialValue = 100;
  
  test( 'should match snapshot', () => {
    const { container } = render(<CounterApp value={ initialValue } />);
    expect( container ).toMatchSnapshot();
  });
  
  test( `should initial value ${initialValue}`, () => {
    render(<CounterApp value={ initialValue } />);
    expect( screen.getByRole('heading', { level: 2} ).innerHTML ).toContain(initialValue.toString());
  });


});