import React from 'react'
import useIncrement from './hooks/useIncrement'
function App() {
  const [count, increment, decrement]=useIncrement(0)
  return (
    <div>
      <h1>Compteur:{count}</h1>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  )
}

export default App
