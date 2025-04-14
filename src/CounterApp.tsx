interface Props {
  value: number;
}

export const CounterApp = ( { value } : Props ) => {
  return (
    <>
      <h1>Counter App</h1>
      <h2>{ value }</h2>
    </>
  )
}
