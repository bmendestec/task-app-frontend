import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../components/styles/Home.css';
import { useHome } from '../hooks/useHome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

export function Home() {
  const { handleLogout } = useHome();
  // const navigate = useNavigate();

  // const userName = getUser(user);

  return (
    <Container>
      <header className="home-header">
        <div className='home-small-header'>
          <h1>Bem-vindo,{"Usuário"}!</h1>
          <p className="home-email">user@gmail.com</p>
          <button onClick={handleLogout}>Sair</button>
        </div>
      </header>
      <Row>
        <Col>1 of 1</Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>





    // <div className="home-container">
    //   <header className="home-header">
    //     <div className='home-small-header'>
    //       <h1>Bem-vindo,${user}{"Usuário"}!</h1>
    //       <p className="home-email">user@gmail.com</p>
    //       <button className="logout-button">Sair</button>
    //     </div>
    //   </header>
    //   <main className="home-main">
    //     <button className="home-button" onClick={() => navigate('/usuarios')}>Usuários</button>
    //     <button className="home-button" onClick={handleLogout}>Sair</button>
    //   </main>
    //   <footer className="home-footer">
    //   </footer>
    // </div>
  );
}