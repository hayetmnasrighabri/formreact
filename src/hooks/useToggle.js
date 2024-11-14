import  { useState } from 'react'

function useToggle(initial=false) {
    const [state, setState]=useState(initial)
    const toggle=()=>setState(v=>!v)
  return (
   
      [state, toggle]
   
  )
}

export default useToggle
