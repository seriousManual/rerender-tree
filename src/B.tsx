import C from './C'

export default function A({input}) {
  return (
    <div>
      <h1>Hello {input}!</h1>
      <C input={input + 'B'} />
    </div>
  )
}