import React from 'react'

function Input({value, onChange, label}) {
  return (
    <div>
      <input
       type='text'
       label={label}
       value={value}
       onChange={(e)=>onChange(e.target.value)}
      />
     
    </div>
  )
}

export default Input
