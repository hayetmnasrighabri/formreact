import React, {useEffect, useState } from 'react'
import Input from './components/Input'
import Checkbox from './components/Checkbox'
function App() {
 const [showInput, setShowInput]= useState(true)
  return (
    <div className='container my-3 stack'>
      <Checkbox 
       checked={showInput}
       onChange={setShowInput}
       id="titleshow"
       label="Afficher le champs titre"
      />
      {showInput && <EditTitle/>}
      <div style={{height: '300vh'}}></div>

      
    </div>
  )
}
function EditTitle(){
  const [title, setTitle]=useState('')
  const [firstname, setFirstname]= useState('')
  const[y, setY]=useState(0)
  useEffect(()=>{
    console.log("title")
    document.title=title
 },[title])
 useEffect(()=>{
window.addEventListener('scroll',(e)=>{
  setY(window.scrollY)
})
 },[])
 return(
    <div className='vstack gap-2'>
      <div>
        scroll: {y}
      </div>
    
      <Input
       placeholder="Modifier le titre"
       value={title}
       onChange={setTitle}
      />
      <Input 
       placeholder="Prénom"
       value={firstname}
       onChange={setFirstname}
      />

    </div>
  )
}
export default App
