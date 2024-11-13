import React, { useEffect } from 'react'
import { useState } from 'react'
function App() {
  const [duration, setDuration]=useState(5)
  const [secondLeft, setSecondLeft]= useState(duration)

  const handleChange=(e)=>{
    const v= e.target.value
    setDuration(v)
    setSecondLeft(v)
  }
  useEffect(()=>{
     const timer= setInterval(()=>{
      setSecondLeft(v=>{
        if (v<=1){
          clearInterval(timer)
          return 0
        }
        return v-1
      })
     },1000)
     return()=>{
      clearInterval(timer)
     }
  },[duration])
  return (
    <div className='vstack gap-2'>
      <input
        value={duration}
        onChange={handleChange}
        placeholder='Timer...'  
      />
      <p>
        Décompte: {secondLeft}
      </p>
    </div>
  )
}

export default App
