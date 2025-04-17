export const usContext = ( { name, key, age, range = 'boss' }: Record<string, any> ) => {

  return {
    nameKey: key,
    name,
    range,
    age,
    latLang: {
      lat: 10.1234,
      long: 10.1234,
    }
  }
};