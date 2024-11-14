import React, { useEffect } from 'react'

function useDocumentTitle(title){
   useEffect(()=>{
    const originalTitle= document.title
    return()=>{
        document.title= originalTitle
    }
   })
    useEffect(()=>{
        document.title=title
    },[title])
  return (
    <div>
      
    </div>
  )
}

export default useDocumentTitle
