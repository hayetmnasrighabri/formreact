import React, { useMemo, useState } from 'react'
import Input from './components/Input'

function App() {
 const [firstname, setFirstname]=useState('John')
 const [password, setPassword]=useState('MotDePasse')

 const security= useMemo(()=>{
  return (
    passwordSecurity(password)
  )
 },[password])   
  return (
    <div className='container my-3 vstack gap-2'>
    <div>
      <Input
       label="Nom d'utilisateur"
       value={firstname}
       onChange={setFirstname}
      />
      </div>
      <div>
      <Input
        label="Password"
        value={password}
        onChange={setPassword}      
      />
      sécurite: {security}
    </div>
  </div>
  )
}
function passwordSecurity(password){
  if (password.length<3){
    return 'Faible'
  }else if (password.length<6){
    return 'Moyen'
  }
  return 'Fort'
}
export default App
