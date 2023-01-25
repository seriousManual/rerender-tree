import { useState } from 'react'
import A from './A'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <A input={count} />
      poop

      <button onClick={() => setCount(Math.random())}>click me plz</button>
    </div>
  )
}

export default App
