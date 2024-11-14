import React, { useState } from 'react'
import useIncrement from './hooks/useIncrement'
import useDocumentTitle from './hooks/useDocumentTitle'
function App() {
  const [count, increment, decrement]=useIncrement(0)
  const [name, setName]= useState('')
   useDocumentTitle('Editer' +name)
  return (
    <div>
      <input value={name} onChange={(e)=>setName(e.target.value)} label="Nom"/>
      <h1>Compteur:{count}</h1>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  )
}

export default App
