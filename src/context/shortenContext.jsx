import React from 'react'
import { createContext, useState, useEffect } from 'react'

const ShortenContext = createContext()

export const ShortenProvider = ({ children }) => {
    const [ output, setOutput ] = useState([])

    const addOutput = (newOutput) => {
        setOutput([newOutput, ...output])
    }

    const updateOutput = (id, updItem ) => {
        setOutput(output.map((item) => item.id === id ? {
            ...item, ...updItem} : item 
        ))
    }

  

  return (
    <ShortenContext.Provider value={{
       addOutput,
       updateOutput,
    }}>
        {children}
    </ShortenContext.Provider>
  )
}

export default ShortenContext
