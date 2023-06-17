import React from 'react'
import './index.css'

const MyLivro = () => {
  return (
    <div> 
    <input type="text" name="name" placeholder="Nome" />
    <input type="text" name="tipo" placeholder="Tipo" />
    <input type="number" name="volumes" placeholder="Volumes" />
    <input type="text" name="autor" placeholder="Autor" />
    <input type="text" name="volumes" placeholder="Editora" />
    <input type="submit" value="Cadastrar" class="btn"/></div>
  )
}

export default MyLivro