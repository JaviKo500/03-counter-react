interface Props {
  value: number;
}

const handleAdd = () => {
  console.log('<--------------- JK CounterApp --------------->');
  console.log('handleAdd');
}

export const CounterApp = ( { value } : Props ) => {
  return (
    <>
      <h1>Counter App</h1>
      <h2>{ value }</h2>
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
