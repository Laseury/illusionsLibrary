
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
          <Nav.Link href="/ver">Livros Cadastrados</Nav.Link>
        </Nav.Item>
        <Nav.Item dropdown>
          <Nav.Link dropdownToggle>Criadores</Nav.Link>
          <Dropdown.Menu>
            <Dropdown.Item href="">Alex Wesley</Dropdown.Item>
            <Dropdown.Item href="">Iarla Darly</Dropdown.Item>
            <Dropdown.Item href="">Luiz Fernando</Dropdown.Item>
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