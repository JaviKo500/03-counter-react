import { useState } from 'react';

interface Props {
  value: number;
}


export const CounterApp = ( { value } : Props ) => {
  const [ counter, setCounter ] = useState( value );
  const handleAdd = () => {
    setCounter( counter + 1 );
    // setCounter( (c) => c + 1 );
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>{ counter }</h2>
      <button
        onClick={ handleAdd }
      >
        +1
      </button>
      <button>
        -1
      </button>
    </>
  )
}
