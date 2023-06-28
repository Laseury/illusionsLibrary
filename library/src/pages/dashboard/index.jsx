import React from 'react'
import './index.css'
const Dashboard = () => {
  return (
    <div className='Corpo'> 
      <section className="banner">
    
    </section>
  
    <section className="livros-em-destaque">
      <h2>Livros em Destaque</h2>
      <div className="livro">
        <img src="https://m.media-amazon.com/images/I/41897yAI4LL._SY344_BO1,204,203,200_QL70_ML2_.jpg" alt="Livro 1"></img>
        <h3>Harry Potter e a pedra filosofal</h3>
        <p>J.K. Rowling</p>
        <a href="#" className="btn">Detalhes</a>
      </div>
      <div className="livro">
        <img src="https://m.media-amazon.com/images/I/51wt58SEkUL._SY344_BO1,204,203,200_QL70_ML2_.jpg" alt="Livro 2"></img>
        <h3>O Iluminado</h3>
        <p>Stephen King</p>
        <a href="#" className="btn">Detalhes</a>
      </div>
      <div className="livro">
        <img src="https://m.media-amazon.com/images/I/41QGA9y1LZL._SY344_BO1,204,203,200_QL70_ML2_.jpg" alt="Livro 3"></img>
        <h3>Estruturas de Dados e com JavaScript</h3>
        <p>Loiane Groner</p>
        <a href="#" className="btn">Detalhes</a>
      </div>
    </section>
    </div>
  )
}

export default Dashboard