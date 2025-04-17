import { greeting } from '../../src/basics/templateString';
describe('TemplateString.test', () => {
  test( 'get greeting return Hello World javiko500', () => {
    const name = 'javiko500';
    const greetingText = greeting(name);
    expect(greetingText).toBe(`Hello World ${name}`);
  });
});