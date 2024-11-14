import React, { useState } from 'react'

function useIncrement(initialValue=0) {
    const [state, setState]=useState(initialValue)
    const increment=()=>setState(state+1)
    const decrement=()=>setState(state-1)
  return (
    [state, increment, decrement]
  )
}

export default useIncrement
