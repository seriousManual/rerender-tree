import D from './D'

export default function A({input}) {
  return (
    <div>
      <h1>Hello {input}!</h1>
      <D input={input + 'C'} />
    </div>
  )
}