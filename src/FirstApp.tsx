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

export const FirstApp = () => {
  return (
    <>
      <h1>
        Hello
      </h1>
      <p>I'm { person.name }</p>
      <p>My age is { person.age } in { currentYear() }</p>
      <p>I live in { person.city }</p>
      <button onClick={ () => add() }>Click me { counter }</button>
      <br />
      <code>{ JSON.stringify(person) }</code>
    </>
  );
}
