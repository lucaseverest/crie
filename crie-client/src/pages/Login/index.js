import React from "react";

import { Link } from "react-router-dom";

import "./styles.css";
import PageInitial from "../../components/InitialPage";

const loginImg = require("../../assets/images/landing.svg");

function Login() {
  return (
    <div id="page-login">
      <div id="page-login-content">
        <div id="left-side">
          <div className="welcome-texts">
            <h1 className="page-title">Crie</h1>
            <h1>Bem vindo!</h1>
            <p>Faça login para entrar no sistema de inovação da sua empresa!</p>
          </div>
          <form className="login-form">
            <div className="input-block">
              <input type="text" id="email" placeholder="E-mail" />
            </div>

            <div className="input-block">
              <input type="password" id="password" placeholder="Senha" />
            </div>

            <Link to="/forgotpassword">Esqueci minha senha</Link>
            <Link to="/signup">Criar conta</Link>

            <button type="submit">Entrar</button>
          </form>
        </div>
        <div id="right-side">
          <img id="login-image" src={loginImg} alt="Inovação" />
        </div>
      </div>
    </div>
  );
}

export default Login;
