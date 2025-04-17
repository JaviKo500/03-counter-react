import { getActiveUser, getUser } from './../../src/basics/functions';
import { test } from '@jest/globals';
describe('Functions.test', () => {
  test( 'getUser return object with uuid and name', () => {
    const testUser = {
      uuid: '12345',
      name: 'javiko500',
    };

    const user = getUser();
    expect(user).toEqual(testUser);
  });

  test( 'getActiveUser return object with uuid and name', () => {
    const testUser = {
      uuid: '1234567',
      name: 'javiko@500',
    };

    const user = getActiveUser(testUser.name);
    expect(user).toStrictEqual(testUser);
  });
});