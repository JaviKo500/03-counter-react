import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';
import React from "react";

describe('FirstApp.test', () => {
  test( 'check match with snapshot', () => {
    const title = 'Hello World';
    const { container } = render(<FirstApp title={title} showTitle/>);
    expect(container).toMatchSnapshot();
  });

  test( 'show title in h1', () => {
    const title = 'Hello World';
    const { getByText, container } = render(<FirstApp title={title} showTitle/>);
    const text = getByText(title)
    expect(text).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toBe(title);
  });
}); 