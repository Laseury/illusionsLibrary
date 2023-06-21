
import React, {useContext, useState} from 'react'
import { AuthContext } from '../../contexts/auth';
import './style.css'

const MyLogin = () => {

    const{authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submit", {email, password});
        login(email, password); //Integraçao com o contexto e api
    };

  return (
    <div>
      <span className="background"></span>
      <span className="centering">
        <form className="my-form">
          <span className="login-welcome-row">
            <img
              className="login-welcome"
              src="astronaut.jpg"
              alt="Welcome"
            />
            <h1>Seja bem vindo ao Illusions Library!</h1>
          </span>
          <div className="text-field">
            <span>{String(authenticated)}</span>
            <label htmlFor="email">Digite seu email:</label>
            <input
              aria-label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Seu email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
          
            />
            <img alt="Email Icon" title="Email Icon" />
          </div>
          <div className="text-field">
            <label htmlFor="password">Digite sua senha:</label>
            <input
              id="password"
              type="password"
              aria-label="Password"
              name="password"
              placeholder="Sua senha"
              title="Mínimo 6 caracteres, um número e uma letra"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
             
            />
            <img alt="Password Icon" title="Password Icon" />
          </div>
          <input type="submit" className="my-form__button" value="Login" />
          <div className="my-form__actions">
            <div className="my-form__row">
              <span>Esqueceu sua senha?</span>
              <a href="#" title="Reset Password">
                Esqueci a senha
              </a>
            </div>
            <div className="my-form__signup">
              <a href="#" title="Create Account">
                Criar uma conta
              </a>
            </div>
          </div>
        </form>
      </span>
    </div>
  )
}

export default MyLogin