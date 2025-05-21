import React,{useState} from 'react'
import context from './context'

function Provider({children}) {
    const [createdExam, setCreatedExam] = useState(null);
  return (
    <context.Provider value={{createdExam,setCreatedExam}}>{children}</context.Provider>
  )
}

export default Provider