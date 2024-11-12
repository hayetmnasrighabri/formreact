import React from 'react'

function Input({value, onChange, placeholder}) {
  return (
    <div>
      <input
         type='text'
         className='form-control'
         value={value}
         onChange={(e)=>onChange(e.target.value)}
         placeholder={placeholder}
      />
    </div>
  )
}

export default Input
