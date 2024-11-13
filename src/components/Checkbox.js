import React from 'react'

function Checkbox({checked, onChange, label}) {
  return (
    <div className='form-check'>
      <input
        type='checkbox'
        className='form-ckeck-input'
        checked={checked}
        onChange={(e)=>onChange(e.target.checked)}
      />
      <label className='form-check-label'>{label}</label>
    </div>
  )
}

export default Checkbox
