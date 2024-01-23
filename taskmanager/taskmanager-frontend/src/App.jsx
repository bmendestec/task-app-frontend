import React from 'react'
import './App.css'
import LoginPage from './components/input/LoginPage.jsx'
import { Button, Link, Spacer } from '@chakra-ui/react';

function App() {    
  const [userName, setUserName] = React.useState('');
  const [passUser, setPassUser] = React.useState('');
  return (
    <>
      <div className="container">
        <form>          
          <LoginPage 
            placeholder="Usuário"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            label="Usuário"
          />  
          <Spacer height='2' />
          <LoginPage 
            placeholder="Senha"
            value={passUser}
            onChange={(event) => setPassUser(event.target.value)}
            label="Senha"
          />    
          <Spacer height='2' />
          <div className="button-login">            
            <Button colorScheme='green'>Entrar</Button>          
            <Link href='/newUserRecord'>Esqueci minha senha</Link>
          </div>
        </form>
      </div>      
    </>
  )
}

export default App
