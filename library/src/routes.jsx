import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from './components/nav'
import Dashboard from './pages/dashboard'
import MyLivro from './pages/livros'
import MyLogin from './pages/login'
import LivroEdit from './pages/livros/LivrosEdit'
import LivrosList from './pages/livros/LivrosList'

const RoutesAPP = () => {
  return (
    <div>
      
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
      <Route exact path ="/login" element={<MyLogin/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/livro' element={<MyLivro/>}/>
      <Route path='/login' element={<MyLogin/>}/>
      <Route path ='/ver' element={<LivrosList/>}/>
      <Route path="/livros/edit/:id" element={<LivroEdit/>} />
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default RoutesAPP