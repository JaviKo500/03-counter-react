import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';
import React from "react";

describe('FirstApp.test', () => {
  test( 'check match with snapshot', () => {
    const title = 'Hello World';
    render(<FirstApp title={title} showTitle/>);
  });
}); 