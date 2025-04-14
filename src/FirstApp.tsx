const person = {
  name: 'Javiko500',
  age: 30,
  city: 'Santiago',
};

const currentYear = () => {
  return new Date().getFullYear();
}
let counter = 0;
const add = () => {
  return counter++;
}

interface Props {
  title: string;
  showTitle: boolean;
  subtitle?: string;
}

export const FirstApp = ( { title, subtitle, showTitle = false } : Props ) => {
  return (
    <>
      <h1 style={ { display: showTitle ? 'block' : 'none' } }>
        { title }
      </h1>
      <h3>{ subtitle }</h3>
      <p>I'm { person.name }</p>
      <p>My age is { person.age } in { currentYear() }</p>
      <p>I live in { person.city }</p>
      <button onClick={ () => add() }>Click me { counter }</button>
      <br />
      {/* <code>{ JSON.stringify(person) }</code> */}
    </>
  );
}
