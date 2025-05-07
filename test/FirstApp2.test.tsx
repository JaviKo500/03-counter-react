import { render, screen } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';
import React from "react";

describe('FirstApp.test', () => {
  const title = 'Hello World';
  const subtitle = 'test subtitle';
  test( 'should match snapshot', () => {
    const { container } = render(<FirstApp title={title} showTitle/>);
    expect( container ).toMatchSnapshot();
  });

  test( 'should message "Hello World"', () => {
    render(<FirstApp title={title} showTitle/>);
    expect( screen.getByText(title) ).toBeTruthy();
  });

  test( 'should title in h1', () => {
    render(<FirstApp title={title} showTitle/>);
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
  });
  

  test( 'should show subtitle send in props', () => {
    render(<FirstApp title={title} showTitle subtitle={subtitle}/>);
    expect( screen.getAllByText(subtitle).length ).toBe(1);
  });
}); 