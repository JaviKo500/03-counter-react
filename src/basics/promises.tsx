import { getHeroById } from "./importExport";

export const getHeroByIdAsync = ( id: number ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      const hero = getHeroById( id );
      return hero 
        ? resolve( hero )
        : reject( 'Not found' );
    }, 1000 );
  });

}