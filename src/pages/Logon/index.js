import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

import imgLogon from '../../assets/imgLogon.svg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form__group">
        <form>
          <h1>sigaa</h1>
          <input 
            type="input" 
            placeholder="Matricula" 
            required />
          <input 
            placeholder="Senha"
            type="password"
          />
          <Link to="/profile">
            <button className="button" type="submit">Entrar</button>
          </Link>
          <p>Aluno, <br /> caso ainda não possua cadastro no SIGAA,<br />
          clique no link abaixo.</p>
          <Link to="/register">
            <button className="button-register" type="submit">Cadastrar-se</button>
          </Link>
        </form>
      </section>
      <img src={imgLogon} alt="logon"/>
    </div>
  );
}
