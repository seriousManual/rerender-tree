import B from './B'

export default  function A({input}) {
  return (
    <div>
      <h1>Hello {input}!</h1>
      <B input={input + 'A'} />
    </div>
  )
}