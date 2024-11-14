//import React, {useState} from 'react';
import useToggle from './hooks/useToggle';
function App() {
  const [checked, toggleCheck] = useToggle()

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleCheck}
      />
      {checked && 'je suis coché'}
    </div>
  );
}

export default App;
