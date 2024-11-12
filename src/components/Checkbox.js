import React from 'react'

function Checkbox({checked, onChange, label, id}) {
  return (
    <div className='form-check'>
      <input
       id={id}
        type='checkbox'
        className='form-ckeck-input'
        checked={checked}
        onChange={(e)=>onChange(e.target.checked)}
      />
      <label htmlFor={id} className='form-check-label'>{label}</label>
    </div>
  )
}

export default Checkbox
