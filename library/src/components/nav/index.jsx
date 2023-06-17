
//Coloque isso no terminal: npm install --save bootstrap-4-react
import React from 'react'
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';


const MyNavbar = () => {
  return (
    <div><Navbar expand="lg" dark bg="dark">
    <Navbar.Brand href="/">
      Illusions Library
    </Navbar.Brand>
    <Navbar.Toggler target="#navbarSupportedContent" />
    <Collapse navbar id="navbarSupportedContent">
      <Navbar.Nav mr="auto">
        <Nav.Item>
          <Nav.Link href="/livro">Cadastrar Livro</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/cliente">Livros Cadastrados</Nav.Link>
        </Nav.Item>
        <Nav.Item dropdown>
          <Nav.Link dropdownToggle>Mais Opções</Nav.Link>
          <Dropdown.Menu>
            <Dropdown.Item href="/livro">Cadastrar Livro</Dropdown.Item>
            <Dropdown.Item href="/editar">Editar Livro</Dropdown.Item>
            <Dropdown.Item href="/ver">Ver Livros</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Bibliotecas estão cheias de ideias, talvez as mais perigosas</Dropdown.Item>
          </Dropdown.Menu>
        </Nav.Item>
    
      </Navbar.Nav>
    </Collapse>
  </Navbar></div>
  )
}

export default MyNavbar