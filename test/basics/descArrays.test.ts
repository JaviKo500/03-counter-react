import { returnArray } from './../../src/basics/descArrays';
describe('DescArrays.test', () => {
  test( 'return string and number', () => {
    const [ text, num ] = returnArray();

    expect(text).toBe('ABC');
    expect(num).toBe(123);

    expect( typeof text ).toBe('string');
    expect( typeof num ).toBe('number');

    expect( text ).toEqual(expect.any(String));
    expect( num ).toEqual(expect.any(Number));
  });
});