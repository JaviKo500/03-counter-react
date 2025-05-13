import { render, screen, fireEvent } from '@testing-library/react';
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

  test( 'should increment counter when click on button +1', () => {
    render(<CounterApp value={ initialValue } />);
    console.log('<--------------- JK CounterApp.test --------------->');
    console.log(screen.debug());
    fireEvent.click( screen.getByText('+1') );
    console.log(screen.debug());
    
    expect( screen.getByRole('heading', { level: 2} ).innerHTML ).toContain((initialValue + 1).toString());

  });
});