import React from 'react';
import { Link } from 'react-router-dom'

import exitIcon from '../../assets/exitIcon.svg';
import primeiroIcon from '../../assets/primeiroIcon.svg';
import segundoIcon from '../../assets/segundoIcon.svg';
import terceiroIcon from '../../assets/terceiroIcon.svg';
import fulanoDash from '../../assets/fulanoDash.svg';
import profile from '../../assets/profile.svg';
import profIcon from '../../assets/profIcon.svg';
import localIcon from '../../assets/localIcon.svg';
import salaIcon from '../../assets/salaIcon.svg';
import horarioIcon from '../../assets/horarioIcon.svg';
import linha from '../../assets/linha.svg';
import uploadIcon from '../../assets/uploadIcon.svg';

import './styles.css';

export default function Profile() {
  return (
    <div className="div container">
      <div className="div side-bar">
        <h1>sigaa</h1>
        <div className="initial-bottom">  
          <button>
            <img src={primeiroIcon} alt="Primeiro"/>
          </button>
          <button>
            <img src={segundoIcon} alt="Segundo"/>
          </button>
          <button>
            <img src={terceiroIcon} alt="Terceiro"/>
          </button>
        </div>
        <div className="bottom">
          <Link to="/">
            <button>
              <img src={exitIcon} alt="Sair"/>
            </button>
          </Link>
        </div>
      </div>
      <div className="dashboard">
        <div className="header">
          <h1>Dashboard</h1>
          <input type="text" placeholder="Pesquisar"/>
        </div>
        <img src={fulanoDash} alt="fulano"/>
        <h1>Turmas do Semestre</h1>
        <div className="turmas">
          <ul>
            <li>
            <p>Desenvolvimento de Software <br/> para Web</p>
            <strong>
              <img src={profIcon} alt="professor"/>
              <p>Jefersson</p>
              <img src={localIcon} alt="local"/>
              <p>Campus Quixadá</p>
            </strong>
            <strong>
              <img src={horarioIcon} alt="horario"/>
              <p className="horario">QUA 13:30-15:30 <br /> QUI 13:30-15:30</p>
              <img className="sala" src={salaIcon} alt="sala"/>
              <p>Lab 1 Bloco 3</p>
            </strong>
            </li>
          </ul>
          <ul>
            <li>
            <p>Desenvolvimento de Software <br/> para Web</p>
            <strong>
              <img src={profIcon} alt="professor"/>
              <p>Jefersson</p>
              <img src={localIcon} alt="local"/>
              <p>Campus Quixadá</p>
            </strong>
            <strong>
              <img src={horarioIcon} alt="horario"/>
              <p className="horario">QUA 13:30-15:30 <br /> QUI 13:30-15:30</p>
              <img  className="sala" src={salaIcon} alt="sala"/>
              <p>Lab 1 Bloco 3</p>
            </strong>
            </li>
          </ul>
          <ul>
            <li>
            <p>Desenvolvimento de Software <br/> para Web</p>
            <strong>
              <img src={profIcon} alt="professor"/>
              <p>Jefersson</p>
              <img src={localIcon} alt="local"/>
              <p>Campus Quixadá</p>
            </strong>
            <strong>
              <img src={horarioIcon} alt="horario"/>
              <p className="horario">QUA 13:30-15:30 <br /> QUI 13:30-15:30</p>
              <img className="sala" src={salaIcon} alt="sala"/>
              <p>Lab 1 Bloco 3</p>
            </strong>
            </li>
          </ul>
          <ul>
            <li>
            <p>Desenvolvimento de Software <br/> para Web</p>
            <strong>
              <img src={profIcon} alt="professor"/>
              <p>Jefersson</p>
              <img src={localIcon} alt="local"/>
              <p>Campus Quixadá</p>
            </strong>
            <strong>
              <img src={horarioIcon} alt="horario"/>
              <p className="horario">QUA 13:30-15:30 <br /> QUI 13:30-15:30</p>
              <img className="sala" src={salaIcon} alt="sala"/>
              <p>Lab 1 Bloco 3</p>
            </strong>
            </li>
          </ul>
          <ul>
            <li>
            <p>Desenvolvimento de Software <br/> para Web</p>
            <strong>
              <img src={profIcon} alt="professor"/>
              <p>Jefersson</p>
              <img src={localIcon} alt="local"/>
              <p>Campus Quixadá</p>
            </strong>
            <strong>
              <img src={horarioIcon} alt="horario"/>
              <p className="horario">QUA 13:30-15:30 <br /> QUI 13:30-15:30</p>
              <img className="sala" src={salaIcon} alt="sala"/>
              <p>Lab 1 Bloco 3</p>
            </strong>
            </li>
          </ul>
          <ul>
            <li>
            <p>Desenvolvimento de Software <br/> para Web</p>
            <strong>
              <img src={profIcon} alt="professor"/>
              <p>Jefersson</p>
              <img src={localIcon} alt="local"/>
              <p>Campus Quixadá</p>
            </strong>
            <strong>
              <img src={horarioIcon} alt="horario"/>
              <p className="horario">QUA 13:30-15:30 <br /> QUI 13:30-15:30</p>
              <img className="sala" src={salaIcon} alt="sala"/>
              <p>Lab 1 Bloco 3</p>
            </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile">
        <div className="dados">
          <h1>Meus dados</h1>
          <img src={profile} alt="profile"/>
          <h2>Fulano</h2>
          <p>478283</p>
          <img className="linha" src={linha} alt="linha"/>
        </div>
        <div className="dados-profile">
          <p>Curso</p>
          <h2>Engenharia de Software</h2>
          <p>Email</p>
          <h2>fulano@alu.ufc.br</h2>
          <p>Nivel</p>
          <h2>Graduacao</h2>
          <div className="group-dados">
            <p>Entrada</p>
            <h2>2018.1</h2>
          </div>
        </div>
        <div className="timeline">
          <h1>Timeline</h1>
          <img src={uploadIcon} alt="upload"/>
          <h2>Novo arquivo adicionado Atividade de casa</h2>
          <div className="description">
            <p>Estrutura de dados</p>
            <p>4 horas atrás</p>
          </div>
          <img src={uploadIcon} alt="upload"/>
          <h2>Novo arquivo adicionado Atividade de casa</h2>
          <div className="description">
            <p>Estrutura de dados</p>
            <p>4 horas atrás</p>
          </div>
          <img src={uploadIcon} alt="upload"/>
          <h2>Novo arquivo adicionado Atividade de casa</h2>
          <div className="description">
            <p>Estrutura de dados</p>
            <p>4 horas atrás</p>
          </div>
          <img src={uploadIcon} alt="upload"/>
          <h2>Novo arquivo adicionado Atividade de casa</h2>
          <div className="description">
            <p>Estrutura de dados</p>
            <p>4 horas atrás</p>
          </div>
          <img src={uploadIcon} alt="upload"/>
          <h2>Novo arquivo adicionado Atividade de casa</h2>
          <div className="description">
            <p>Estrutura de dados</p>
            <p>4 horas atrás</p>
          </div>
          <img src={uploadIcon} alt="upload"/>
          <h2>Novo arquivo adicionado Atividade de casa</h2>
          <div className="description">
            <p>Estrutura de dados</p>
            <p>4 horas atrás</p>
          </div>
          <img src={uploadIcon} alt="upload"/>
          <h2>Novo arquivo adicionado Atividade de casa</h2>
          <div className="description">
            <p>Estrutura de dados</p>
            <p>4 horas atrás</p>
          </div>
          <img src={uploadIcon} alt="upload"/>
          <h2>Novo arquivo adicionado Atividade de casa</h2>
          <div className="description">
            <p>Estrutura de dados</p>
            <p>4 horas atrás</p>
          </div>
          <h3>Ver mais</h3>
        </div>
      </div>
    </div>
  );
}
