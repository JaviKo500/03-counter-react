import { usContext } from '../../src/basics/desObjects';
describe('DescObjects.test', () => {
  test( 'get usContext return object with name, age and range', () => {
    const user = { name: 'javiko500', key: '12345', age: 30, range: 'boss' };
    const data = usContext( user );
    expect(data).toEqual({
      nameKey: user.key,
      age: user.age,
      range: user.range,
      name: user.name,
      latLang: expect.any(Object),
    });
  });
});