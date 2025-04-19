import { getHeroByIdAsync } from '../../src/basics/promises';
describe('Promises.test', () => {
  test( 'getHeroByIdAsync get hero by id', (done) => {
    const id = 1;
    getHeroByIdAsync(id)
      .then( hero => {
        expect(hero).not.toBeUndefined();
        done();
      });
  });
  test( 'getHeroByIdAsync get error if', (done) => {
    const id = 100;
    getHeroByIdAsync(id)
      .catch( error => {
        expect(error).toBe('Not found');
        done();
      });
  });
});