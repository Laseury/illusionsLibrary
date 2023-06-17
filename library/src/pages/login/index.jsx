import React from 'react'
import './style.css'

const MyLogin = () => {
  return (
    <div>
      <title></title>
        <link rel="stylesheet" href="style.css"></link>
     <span class="background"></span>
        <span class="centering">
            <form class="my-form">
                <span class="login-welcome-row">
                    <img
                        class="login-welcome"
                        src="astronaut.jpg"
                    />
                   
                    <h1>LogIn!</h1>
                </span>
                <div class="text-field">
                    <label for="email">Digite seu email:</label>
                    <input
                        aria-label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Seu email"
                        required
                    />
                    <img
                        alt="Email Icon"
                        title="Email Icon"
                    />
                </div>
                <div class="text-field">
                    <label for="password">Digite sua senha:</label>
                    <input
                        id="password"
                        type="password"
                        aria-label="Password"
                        name="password"
                        placeholder="Sua senha"
                        title="Minimo 6 caracteres um numero e uma letra"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                        required
                    />
                    <img
                        alt="Password Icon"
                        title="Password Icon"
                    />
                </div>
                <input type="submit" class="my-form__button" value="Login" />
                <div class="my-form__actions">
                    <div class="my-form__row">
                        <span>Esqueceu sua senha?</span>
                        <a href="#" title="Reset Password">Esqueci a senha</a>
                    </div>
                    <div class="my-form__signup">
                        <a href="#" title="Create Account">Criar uma conta</a>
                    </div>
                </div>
            </form>
        </span>
        </div>
  )
}

export default MyLogin