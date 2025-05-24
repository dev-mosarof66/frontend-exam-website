import React, { useEffect, useState } from 'react'
import context from './context'

function Provider({ children }) {
  const [createdExam, setCreatedExam] = useState(null);
  useEffect(() => {
    const storedCreatedExam = localStorage.getItem('createdExam');
    if (storedCreatedExam) {
      setCreatedExam(JSON.parse(storedCreatedExam));
    }
  }, [setCreatedExam]);
  return (
    <context.Provider value={{ createdExam, setCreatedExam }}>{children}</context.Provider>
  )
}

export default Provider