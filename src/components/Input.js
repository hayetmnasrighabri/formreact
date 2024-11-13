import React from 'react'

function Input({value, onChange, placeholder}) {
  return (
    <div>
      <input
       type='text'
       placeholder={placeholder}
       value={value}
       onChange={(e)=>onChange(e.target.value)}
      />
     
    </div>
  )
}

export default Input
