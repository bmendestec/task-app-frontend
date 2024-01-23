import { useState } from 'react'
import './App.css'
import LoginPage from './components/input/LoginPage.jsx'
import { ChakraProvider } from '@chakra-ui/react'

function App() {  
  const placeholder = "Primeiro nome";  
  return (
    <>
      <ChakraProvider>
        <LoginPage placeholder={placeholder}/>  
      </ChakraProvider>      
    </>
  )
}

export default App
