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
  const handleSubtract = () => {
    setCounter( counter - 1 );
    // setCounter( (c) => c + 1 );
  }
  const handleReset = () => {
    setCounter( value );
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
      <button
        onClick={ handleSubtract }
      >
        -1
      </button>
      <button
        onClick={ handleReset }
      >
        Reset
      </button>
    </>
  )
}
