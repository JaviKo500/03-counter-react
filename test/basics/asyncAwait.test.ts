import { getImage } from './../../src/basics/asyncAwait';
describe('AsyncAwait.test', () => {
  test( 'getImage return image url', async () => {
      const image = await getImage();
      expect( typeof image ).toBe('string'); 
      expect( image ).not.toBe('Not found image');
  });
});