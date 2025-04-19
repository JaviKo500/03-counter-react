import { getHeroById, getHeroesByOwner } from '../../src/basics/importExport';
import { heroes } from '../../src/data/heroes';
describe('ImportExport.test', () => {
  test( 'get hero by id', () => {
    const id = 1;
    const hero =  getHeroById(id);

    expect(hero).not.toBeUndefined();
    expect(hero?.id).toBe(id);
  });

  test( 'get hero by id returns undefined', () => {
    const id = 100;
    const hero =  getHeroById(id);

    expect(hero).toBeUndefined();
    expect(hero).toBeFalsy();
  });

  test( 'get heroes by owner DC', () => {
    const owner = 'DC';
    const heroesFilter =  getHeroesByOwner(owner);

    expect(heroesFilter).toHaveLength(3);
    expect(heroesFilter).toEqual(heroes.filter(hero => hero.owner === owner));
  });
  
  test( 'get heroes by owner Marvel', () => {
    const owner = 'Marvel';
    const heroesFilter =  getHeroesByOwner(owner);
    
    expect(heroesFilter).toHaveLength(2);
    expect(heroesFilter).toEqual(heroes.filter(hero => hero.owner === owner));
  });
});